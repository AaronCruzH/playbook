class repo {
    static name= "LaunchX"
    static author= "carlogilmar"
    language= "JavaScript"
    numberOfCommits= 100
    stars= 199
    forks= 299
    static issues_open= 10
    static issues_close= 10

   /* constructor(name, author, language, numberOfCommits,stars,forks,issues_open,issues_close){
    this.name= "LaunchX"
    this.author= "carlogilmar"
    this. language= "JavaScript"
    this. numberOfCommits= 100
    this. stars= 199
    this.forks= 299
    this.issues_open= 10
    this.issues_close= 10}*/
    
    static getTotalIssues(){
      return [this.issues_open + this.issues_close]
    }
    static getGeneralInfo(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   repo1 = new repo;
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   

   class issue {
    title= "Issue1"
    repositoryNamedAssociated= "Repository 1"
    status= "Active"
    numberOfComents= 10
    labels= "Hello"
    static author="AaronCruzHdz"
    static dateCreated= "2020/03/21"
    static lastUpdated= "2020/04/21"
    /*
    constructor(title,repositoryNameAssociated,status,numberOfComents,labels,author,dateCreated,lastUpdated){
    title= "Issue1"
    repositoryNamedAssociated= "Repository 1"
    status= "Active"
    numberOfComents= 10
    labels= "Hello"
    author="AaronCruzHdz"
    dateCreated= "2020/03/21"
    lastUpdated= "2020/04/21"}*/
    static getTitleAndAuthor(){
        return `This issue was created by ${this.author}`
    }
    static getGeneralInfo(){
      return `\n${this.getTitleAndAuthor()}\nThis issue was created in ${this.dateCreated}\nThis issue was updated in ${this.lastUpdated}`
    }
}

//console.log(""+issue.getTitleAndAuthor())
console.log(""+issue.getGeneralInfo())

class PullRequest {
        static title="Pull Request 1"
        static branchName="Branch Name"
        dateCreated="2020/04/21"
        static status="Active"
        repositoryNameAssociated="Repository 1"
   /* constructor(title, branchName, dateCreated, status,repositoryNameAssociated){
    title="Pull Request 1"
    branchName="Branch Name"
    dateCreated="2020/04/21"
    status="Active"
    repositoryNameAssociated="Repository 1"}*/
    
    static getStatus(){
        return `The status of this Pull Request is ${this.status}`
    }
    static getTitleAndAuthor(){
        return `The title of this Pull Request is: ${this.title} and the author of this Pull Request is ${issue.author}`
    }
}

console.log("\nNombre de la rama: "+PullRequest.branchName)
console.log("Estatus de la solicitud: "+PullRequest.getStatus())
console.log("Titulo y autor de la solicitud: "+PullRequest.getTitleAndAuthor())