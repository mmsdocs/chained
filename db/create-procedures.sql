CREATE OR REPLACE FUNCTION to_find(set_tag text) 
    RETURNS TABLE(id bigint, on_datetime timestamp, title text, tags text, link text) 
AS
$$
    SELECT id, on_datetime, title, tags, link
    FROM public.links
    WHERE lower(title) SIMILAR TO concat('%(', replace(lower(set_tag), ' ', '|'), ')%') OR lower(tags) SIMILAR TO concat('%(', replace(lower(set_tag), ' ', '|'), ')%');
$$
LANGUAGE sql;