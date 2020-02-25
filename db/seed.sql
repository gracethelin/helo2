CREATE TABLE users (
    user_id serial primary key,
    username VARCHAR(20),
    password VARCHAR(20),
    profile_pic TEXT
)

CREATE TABLE post (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(45),
    img TEXT,
    content TEXT,
    author INT references users(user_id)
)



ALTER TABLE users
ALTER password
SET DATA TYPE TEXT;