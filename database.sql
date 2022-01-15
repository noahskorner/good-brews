CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    username VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE refresh_tokens (
    token VARCHAR(255) PRIMARY KEY,
    date_created TIMESTAMP DEFAULT NOW(),
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE breweries (
    obdb_id VARCHAR(255) UNIQUE,
    name VARCHAR(255) NOT NULL,
    brewery_type VARCHAR(255) NOT NULL,
    street VARCHAR(255),
    address_2 VARCHAR(255),
    address_3 VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    state VARCHAR(255),
    county_province VARCHAR(255),
    postal_code VARCHAR(255) NOT NULL,
    phone VARCHAR(255),
    website_url VARCHAR(255),
    country VARCHAR(255) NOT NULL,
    longitude DECIMAL,
    latitude DECIMAL,
    tags TEXT[]
);

