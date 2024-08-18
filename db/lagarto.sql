CREATE TABLE
  empresa (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre text NOT NULL,
    telefono text NOT NULL,
    email text NOT NULL,
    direccion text NOT NULL,
    foto varchar not null
  );

CREATE TABLE
  caja (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    numero integer NOT NULL,
    nombre text NOT NULL,
    efectivo numeric(30, 2) NOT NULL
  );

CREATE TABLE
  categoria (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre text NOT NULL,
    ubicacion text NOT NULL
  );

CREATE TABLE
  cliente (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    tipo_documento text NOT NULL,
    numero_documento text NOT NULL,
    nombre text NOT NULL,
    apellido text NOT NULL,
    provincia text NOT NULL,
    ciudad text NOT NULL,
    direccion text NOT NULL,
    telefono text NOT NULL,
    email text NOT NULL
  );

CREATE TABLE
  producto (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    codigo text NOT NULL,
    nombre text NOT NULL,
    stock_total integer NOT NULL,
    tipo_unidad text NOT NULL,
    precio_compra numeric(30, 2) NOT NULL,
    precio_venta numeric(30, 2) NOT NULL,
    marca text NOT NULL,
    color text NOT NULL,
    estado text NOT NULL,
    foto text NOT NULL,
    categoria_id bigint NOT NULL REFERENCES categoria (id)
  );

CREATE TABLE
  usuario (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre text NOT NULL,
    apellido text NOT NULL,
    email text NOT NULL,
    usuario text NOT NULL,
    clave text NOT NULL,
    foto text NOT NULL,
    caja_id bigint NOT NULL REFERENCES caja (id)
  );

CREATE TABLE
  venta (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    codigo text UNIQUE NOT NULL,
    fecha date NOT NULL,
    hora text NOT NULL,
    total numeric(30, 2) NOT NULL,
    pagado numeric(30, 2) NOT NULL,
    cambio numeric(30, 2) NOT NULL,
    usuario_id bigint NOT NULL REFERENCES usuario (id),
    cliente_id bigint NOT NULL REFERENCES cliente (id),
    caja_id bigint NOT NULL REFERENCES caja (id)
  );

CREATE TABLE
  venta_detalle (
    id bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    cantidad integer NOT NULL,
    precio_compra numeric(30, 2) NOT NULL,
    precio_venta numeric(30, 2) NOT NULL,
    total numeric(30, 2) NOT NULL,
    descripcion text NOT NULL,
    venta_codigo text NOT NULL REFERENCES venta (codigo),
    producto_id bigint NOT NULL REFERENCES producto (id)
  );
