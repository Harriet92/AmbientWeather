var spawn = require('child_process').spawn;
import { ChildProcess } from 'child_process';

export default class EnginesControllerApi {
    readonly openEnginesAppPath: string = "/var/piapps/openBlinds";
    readonly closeEnginesAppPath: string = "/var/piapps/closeBlinds";

    Open() {        
        spawn(this.openEnginesAppPath);
    }

    Close() {
        spawn(this.closeEnginesAppPath);
    }
}
