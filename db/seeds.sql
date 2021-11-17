INSERT INTO BarList(name, brewery_type, street, phone, website_url)
  VALUES
    ( 'A+ Bar','pub', 'AA Street', 11111, 'A+bar.com'),
    ( 'B+ Bar', 'pub','BB Street', 22222, 'B+bar.com'),
    ( 'C+ Bar', 'pub', 'CC Street', 33333, 'C+bar.com');

  INSERT INTO User(username, password)
    VALUES  
      ('Barley', 'password1'),
      ('Hops', 'password2'),
      ('Malt', 'password3');

INSERT INTO Comments(comment_text, user_id)
  VALUES('This Bar Was FUN', 1),
        ('Lame BAR, do not go', 2),
        ('Great happy hour', 3);
        