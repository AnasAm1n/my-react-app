# Noter til opgave 5 (PR #5): React Router `clientLoader`

## Opgavereference

- Tutorial: Step 5, “Data fetching with `clientLoader`”.
- Pull request: #5.
- Forudsætning: PR #4 om routing til `/chat/new` og `/chat/:threadId`.
- Relateret tidligere opgave: PR #3 om state management med `useState`.
- Deltrin: 1) loader til chatbeskeder, 2) loader til samtalelisten, 3) aktiv tråd med `NavLink`, 4) valgfri pending-animation.
- Reference-commits: `55ec7b1`, `39e3f53`, `19fc0f6` og `24f6f7e`.

## Hvad jeg gjorde

- I `chat-thread.jsx` lavede jeg en `clientLoader`, der venter 500 ms og returnerer trådens ID og mockbeskeder. Komponenten henter nu data med `useLoaderData()` i stedet for at bruge `useParams()` og `useState()` til beskederne.
- I `layout.jsx` lavede jeg en `clientLoader`, der venter 300 ms og returnerer 14 samtaler. Jeg bruger tekst-ID'er, som passer til URL-parametre og typiske database-ID'er, og læser samtalerne med `useLoaderData()`.
- I `Sidebar.jsx` skiftede jeg samtalelinks til `NavLink`. Routeren kan dermed selv markere den aktive samtale og den samtale, der er ved at blive indlæst.
- I `app.css` tilføjede jeg tydelig styling for den aktive samtale og en pulserende tekstanimation under indlæsning.
- Sletning og afsendelse ændrer ikke data endnu. Funktionerne logger, at mutationer kommer senere, fordi denne opgave handler om indlæsning.

## Det lærte jeg

Jeg bruger en loader til data, der kommer udefra, fordi React Router så kan hente data før den tilhørende side vises. Layout-loaderen har samtalelisten, fordi den deles af siderne, mens tråd-loaderen henter beskeder for den aktuelle URL. Når en tråd åbnes direkte eller siden genindlæses, skal begge loaders bruge data; ved skift mellem tråde skal kun tråd-loaderen køre igen.

`NavLink` holder aktiv og afventende navigation synkroniseret med URL'en, så jeg ikke selv behøver at holde den tilstand i React-state. Forsinkelserne på 300 ms og 500 ms simulerer netværk, så jeg kan se indlæsningen og pending-animationen. Der foretages ikke rigtige API-kald endnu.
