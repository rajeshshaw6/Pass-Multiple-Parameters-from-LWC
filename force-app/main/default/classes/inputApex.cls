public with sharing class inputApex {
    @AuraEnabled(cacheable=true)
        public static List<Account> returnAccount(String accName,String accWebsite)
        {
            List<Account> accList = new List<Account>();
            String searchKey = '%'+accName+'%';
            accList = [SELECT Id,Name,Website from Account where Name LIKE:searchKey OR Website=:accWebsite];
            return accList;
        }
}