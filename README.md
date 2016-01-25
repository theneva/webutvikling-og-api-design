# Webutvikling og API-design

Forelesningsmateriale til PG6300 Webutvikling og API-design vår 2016.

Emnet dreier seg i all hovedsak om React med Webpack på klientside, og Node med MongoDB på serverside.

## Gotchas

- Klassenavn på React-komponenter MÅ __CamelCases__:
    - `class btn extends React.Component {` fungerer __IKKE__.
    - `class Btn extends React.Component {` __fungerer__.
