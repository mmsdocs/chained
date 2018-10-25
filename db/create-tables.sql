CREATE SEQUENCE public.links_id_seq;

CREATE TABLE public.Links (
                id BIGINT NOT NULL DEFAULT nextval('public.links_id_seq'),
                on_datetime TIMESTAMP NOT NULL,
                title text NOT NULL,
                tags text NOT NULL,
                link text NOT NULL,
                CONSTRAINT links_pk PRIMARY KEY (id)
);


ALTER SEQUENCE public.links_id_seq OWNED BY public.Links.id;