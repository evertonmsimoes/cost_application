CREATE TABLE project(
    id TEXT PRIMARY KEY NOT NULL,
    id_category TEXT NOT NULL,
    name TEXT NOT NULL,
    budget_in_cents INTEGER NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories(id)
);
