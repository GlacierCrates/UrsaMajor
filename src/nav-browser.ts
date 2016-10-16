import { LogManager, autoinject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@autoinject
export class NavBrowser {

    private log = LogManager.getLogger('glaciercrates/ursamajor/nav-browser');
    private router: Router;

    public constructor(router: Router) {
        this.log.debug('test');
        this.router = router;
    }

    public goTo(routeName: string) {
        this.router.navigateToRoute(routeName);
    }
}