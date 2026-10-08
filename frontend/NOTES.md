# Noter: React Router `clientLoader`

## Hvad blev ændret

- `chat-thread.jsx` eksporterer nu en `clientLoader`, der venter 500 ms og returnerer trådens ID sammen med mockbeskeder. Komponenten læser resultatet med `useLoaderData()` i stedet for `useParams()` og `useState()`.
- `layout.jsx` indlæser nu en liste med 14 tråde via sin egen `clientLoader` efter 300 ms. Tråd-ID'er er strenge, og layoutet læser listen med `useLoaderData()`.
- `Sidebar.jsx` bruger `NavLink` til trådene. Aktiv tråd markeres automatisk, og den afventende destination får en pending-klasse.
- `app.css` fremhæver den aktive tråd og pulserer teksten, mens en navigation venter.
- Sletning og afsendelse logger fortsat kun, at mutationer kommer senere; de ændrer ikke loaderdata lokalt.

## Hvorfor

Route-data hører til i React Router-loaders, så den er klar før den matchede side vises og genindlæses ved navigation eller refresh. Layout-loaderen placerer den fælles trådliste ét sted, mens tråd-loaderen ejer beskeder for den valgte URL. `NavLink` udleder aktiv og afventende status fra routeren, så komponenten ikke selv skal synkronisere den med URL'en.

Forsinkelserne er simuleret mocknetværk til at gøre loader- og pending-adfærden synlig; der foretages ingen reelle API-kald.
