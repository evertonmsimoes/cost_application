create table services(
    id TEXT PRIMARY KEY NOT NULL,
    id_project TEXT NOT NULL,
    name TEXT NOT NULL,
    cost_in_cents INTEGER NOT NULL,
    description TEXT NOT NULL,
    FOREIGN KEY (id_project) REFERENCES project(id)
)
