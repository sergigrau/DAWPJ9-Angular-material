# DAW2PJ9

<p align="center">
  <img src="https://www.jesuites.net/wp-content/themes/jesuitas/img/logo.svg" alt="Jesuïtes Logo" height="80"/>
  <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="Angular Logo" height="80"/>
</p>

Summary
-------
Angular project generated with Angular CLI (v21.x). Base application with a typical Angular structure; may include Angular Material depending on project dependencies.

Main structure
--------------
- src/ - application source code
  - app/ - components, services and modules
  - assets/ - images and static resources
  - environments/ - environment configurations (dev/prod)
- angular.json - Angular CLI project configuration
- package.json - dependencies and scripts
- tsconfig.json - TypeScript configuration

Useful commands
---------------
- Development: `ng serve` → open http://localhost:4200
- Build: `ng build`
- Unit tests (Vitest or configured runner): `ng test`
- E2E tests: `ng e2e`

Components (brief concepts per component)
----------------------------------------
The list below is a template. Provide the src/app/*.ts files or paste their contents and I will replace these placeholders with exact summaries.

- AppComponent — application shell, routing outlet, top-level services
- HeaderComponent — layout, navigation, Material toolbar/menu
- FooterComponent — layout and footer content
- LoginComponent — reactive forms, validation, authentication service integration
- DashboardComponent — data fetching, RxJS streams, change detection strategies
- ItemsListComponent — list rendering, async pipes, pagination, filtering
- ItemDetailComponent — route params, resolver usage, child components
- MaterialDemoComponent — Angular Material usage: cards, dialogs, snackbars
- SharedModule — reusable components, directives, and pipes
- CoreModule — singleton services, interceptors, app-wide providers

How you can help
----------------
- Paste the contents of src/app/*.ts (or give access) and I will update the Components section with exact concepts found in each file.
- Or confirm I should scan the repository to generate the detailed list.

Notes
-----
- Check package.json to confirm if Angular Material is installed and to view available scripts.
- To add components: `ng generate component component-name`
- For detailed Angular CLI docs: https://angular.dev/tools/cli
