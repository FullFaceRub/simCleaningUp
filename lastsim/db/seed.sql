create table bins
(bin_id serial primary key
, bin_name varchar(180)
, bin_price numeric(10,2))

create table bin_contents
(content_id serial primary key
, bin_id integer references bins(bin_id)
, bin_content varchar(180)
, quantity integer)

select bin_name, bin_price from bins
where quantity IN (select quantity from bin_contents where quantity=1)