var spawn = require('child_process').spawn;
import { ChildProcess } from 'child_process';

export default class LedControllerApi {
    readonly ledAppPath: string = "/var/piapps/test";
    private ledAppProcess: ChildProcess;

    Run(temp: Number = 0) {        
        this.ledAppProcess = spawn(this.ledAppPath, ["-c"], (error, stdout, stderr) => {
            console.log(stdout);
            console.log("Errors: ");
            console.log(stderr);
        });
    }

    Stop() {
        this.ledAppProcess.kill("SIGTERM");
    }
}
