var spawn = require('child_process').spawn;
import { ChildProcess } from 'child_process';

export default class LedControllerApi {
    readonly ledAppPath: string = "/var/piapps/test";
    private ledAppProcess: ChildProcess;

    Run(temp: Number = 0) {        
        this.ledAppProcess = spawn(this.ledAppPath, ["-c"]);
    }

    Stop() {
        this.ledAppProcess.kill("SIGTERM");
    }
}
