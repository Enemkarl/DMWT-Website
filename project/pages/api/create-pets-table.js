import { createPool } from '@vercel/postgres';

// Hier fügst du deinen Connection String ein
const pool = createPool({
  connectionString: "postgres://default:TkzlfyS3q5pK@ep-purple-shadow-19233240-pooler.eu-central-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",
});

export default async function handler(request, response) {
  try {
    // Du erhältst eine Verbindung aus dem Pool
    const client = await pool.connect();

    // Erstellst die Tabelle, wenn sie nicht existiert
    await client.query(
      'CREATE TABLE IF NOT EXISTS Pets (Name varchar(255), Owner varchar(255));'
    );

    // Füge Beispieldaten ein
    const names = ['Fiona', 'Lucy', 'Max'];
    const owners = ['Alice', 'Bob', 'Charlie'];

    for (let i = 0; i < names.length; i++) {
      await client.query(
        'INSERT INTO Pets (Name, Owner) VALUES ($1, $2);',
        [names[i], owners[i]]
      );
    }

    // Lese Daten aus der Tabelle
    const result = await client.query('SELECT * FROM Pets;');

    // Gibst die Verbindung zum Pool zurück
    client.release();

    // Zeige die Daten im Browser an
    return response.status(200).json({ pets: result.rows });
  } catch (error) {
    return response.status(500).json({ error });
  }
}