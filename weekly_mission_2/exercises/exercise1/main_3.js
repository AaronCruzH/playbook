const issue = {
    title: "Issue1",
    repositoryNamedAssociated: "Repository 1",
    status: "Active",
    numberOfComents: 10,
    labels: "Hello",
    author:"Aaron",
    dateCreated: "2020/03/21",
    lastUpdated: "2020/04/21",
    getTitleAndAuthor: function (){
        return `This issue was created by ${this.author}`
    },
    getGeneralInfo: function (){
      return `\n${this.getTitleAndAuthor()}\nThis issue was created in ${this.dateCreated}\nThis issue was updated in ${this.lastUpdated}`
    }
}

//console.log(""+issue.getTitleAndAuthor())
console.log(""+issue.getGeneralInfo())

const PullRequest = {
    title:"Pull Request 1",
    branchName:"Branch Name",
    dateCreated:"2020/04/21",
    status:"Active",
    repositoryNameAssociated:"Repository 1",
    
    getStatus: function(){
        return `The status of this Pull Request is ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `The title of this Pull Request is: ${this.title} and the author of this Pull Request is ${issue.author}`
    }
}

console.log("Nombre de la rama: "+PullRequest.branchName)
console.log("Estatus de la solicitud: "+PullRequest.getStatus())
console.log("Titulo y autor de la solicitud: "+PullRequest.getTitleAndAuthor())