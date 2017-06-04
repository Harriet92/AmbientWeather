var spawn = require('child_process').spawn;
import { ChildProcess } from 'child_process';

export default class EnginesControllerApi {
    readonly enginesAppPath: string = "/var/piapps/spin";

    Open() {        
        spawn(this.enginesAppPath, ["800", "left"]);
    }

    Close() {
        spawn(this.enginesAppPath, ["800", "right"]);
    }
}
