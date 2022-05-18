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