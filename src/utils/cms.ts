import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'src/data');

export async function getFilms() {
  const filePath = path.join(DATA_DIR, 'films.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function saveFilms(films: any[]) {
  const filePath = path.join(DATA_DIR, 'films.json');
  fs.writeFileSync(filePath, JSON.stringify(films, null, 2), 'utf8');
}

export async function getTeam() {
  const filePath = path.join(DATA_DIR, 'team.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function saveTeam(team: any[]) {
  const filePath = path.join(DATA_DIR, 'team.json');
  fs.writeFileSync(filePath, JSON.stringify(team, null, 2), 'utf8');
}

export async function getConfig() {
  const filePath = path.join(DATA_DIR, 'config.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function saveConfig(config: any) {
  const filePath = path.join(DATA_DIR, 'config.json');
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2), 'utf8');
}

export async function getUsers() {
  const filePath = path.join(DATA_DIR, 'users.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

export async function saveUsers(users: any[]) {
  const filePath = path.join(DATA_DIR, 'users.json');
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2), 'utf8');
}

export async function getSubscribers() {
  const filePath = path.join(DATA_DIR, 'newsletter.json');
  if (!fs.existsSync(filePath)) return [];
  const subs = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return subs.map((s: any) => s.email);
}

export async function addSubscriber(email: string) {
  const filePath = path.join(DATA_DIR, 'newsletter.json');
  let subs = [];
  if (fs.existsSync(filePath)) {
    subs = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  }
  if (!subs.find((s: any) => s.email === email)) {
    subs.push({ email, subscribedAt: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(subs, null, 2), 'utf8');
  }
}
