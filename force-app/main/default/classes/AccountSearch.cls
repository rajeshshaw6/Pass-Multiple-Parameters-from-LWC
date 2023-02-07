public with sharing class AccountSearch {
    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(String acc)
    {
        String searchKey = '%' + acc + '%';
        List<Account> accList = [SELECT ID,NAME,Phone from Account where NAME LIKE:searchKey];
        return accList;
    }
}