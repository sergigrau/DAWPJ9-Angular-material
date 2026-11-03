# DAWPJ9 - Angular Material

Repositori d'exercicis pràctics d'Angular per al mòdul DAW, actualitzat a **Angular 22** i amb exemples de:

- components standalone
- templates i bindings
- directrius estructurals (`*ngIf`, `*ngFor`, `@for`)
- pipes
- formularis amb `FormsModule`
- consum de serveis HTTP
- Angular Material
- animacions amb l'enfocament nou (`animate.enter` / `animate.leave`)

## Requisits

- **Node.js**: `v24.15.0` o superior (recomanat amb `nvm`)
- **npm**: versió compatible amb Node 24

Exemple amb `nvm`:

```bash
source ~/.nvm/nvm.sh
nvm install 24.15.0
nvm use 24.15.0
```

## Instal·lació i execució

```bash
npm install
npm start
```

Compilació de producció:

```bash
npm run build
```

## Estructura d'exercicis

| Ruta | Exercici | Fitxer principal | Què treballa |
|---|---|---|---|
| `/m01` | M01 Salutació | `src/app/m01-salutacio.component.ts` | Component mínim i interpolació bàsica |
| `/m02` | M02 Suma | `src/app/m02-suma.component.ts` | Entrada d'usuari, esdeveniments i `*ngIf` |
| `/m02bis` | M02bis Suma (Forms) | `src/app/m02bis-suma.component.ts` | Two-way binding amb `[(ngModel)]` |
| `/m03` | M03 Iterador | `src/app/m03-iterador.component.ts` | Llistes i iteració d'elements |
| `/m04` | M04 Pomodoro | `src/app/m04-pomodoro.component.ts` | Temporitzador reactiu amb signals |
| `/m05` | M05 Bindings | `src/app/m05-bindings.component.ts` | `@Input`, `@Output` i comunicació pare-fill |
| `/m06` | M06 Directives | `src/app/m06-directives.component.ts` | `*ngIf`, `*ngFor`, `ngSwitch`, `ngStyle` |
| `/pipes` | M08 Pipes | `src/app/m08-pipes.component.ts` | Pipes natives i pipes personalitzades |
| `/alumnes` | M09 Alumnes | `src/app/m9-alumnes.component.ts` | CRUD simple, formulari i `@for` |
| `/m10` | M10 Logo | `src/app/m10-logo.component.ts` | Càrrega de JSON des d'assets i render de taula |
| `/m11` | M11 Animacions | `src/app/m11-animacions.component.ts` | Animacions d'entrada/sortida i transicions CSS |
| `/m12` | M12 Alumnes (API) | `src/app/m12.component.ts` | Servei HTTP i lògica de càrrega |
| `/m13` | M13 Material Salutació | `src/app/m13-material-missatge.ts` | `MatSnackBar` |
| `/m14` | M14 Suma (Material) | `src/app/m14-material-inputs.component.ts` | `MatFormField`, `MatInput`, càlcul reactiu |
| `/m15` | M15 Inputs (Checkbox/Radio) | `src/app/m15-material-inputs.component.ts` | `MatCheckbox`, `MatRadio` i resum de selecció |

## Wiki

La descripció detallada de cada exercici és a la wiki del repositori:

- [Wiki del projecte](https://github.com/sergigrau/DAWPJ9-Angular-material/wiki)

