import * as Agenda from "agenda";
import WeatherJobs from "./Jobs";
import GlobalParameters from "../config/constants/GlobalParameters";

export default class UpdateScheduler {
    readonly JobsCollectionName: string = "Jobs";
    agenda: Agenda;
    currentJob: Agenda.Job;
    jobInterval: string;

    constructor(jobInterval: string = "20 seconds") {
        this.jobInterval = jobInterval;
        this.agenda = new Agenda();
        this.agenda.database(GlobalParameters.MongoUri, this.JobsCollectionName, null, err => this.Init(err));
    }

    Init(err) {
        if (err) {
            console.log(err);
        } else {
            this.DefineJobs();
            this.Set();
            this.agenda.start();
        }
    }

    Set() {
        this.currentJob = this.agenda.every(this.jobInterval, WeatherJobs.Ids.UpdateAll);
    }

    private DefineJobs() {
        this.agenda.define(WeatherJobs.Ids.UpdateAll, WeatherJobs.UpdateAll);
    }
}