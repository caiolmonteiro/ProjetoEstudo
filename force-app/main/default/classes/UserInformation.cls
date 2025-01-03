/**
 * @description       : Controller that helps adquiring the current user information
 * @author            : Caio Leão Monteiro
 * @group             : 
 * @last modified on  : 01-02-2025
 * @last modified by  : Caio Leão Monteiro
**/
public with sharing class UserInformation {

    /**
    * @description Returns the information about the logged user
    * @author Caio Leão Monteiro | 01-02-2025 
    * @return UserInner 
    **/
    @AuraEnabled
    public static UserInner getCurrentUserInfo(){
        User urs = [
            SELECT  Id, Name
            FROM    User
            WHERE   Id =: UserInfo.getUserId()
            LIMIT   1
        ];

        return new UserInner(urs);
    }

    public class UserInner{
        @AuraEnabled public String Id;
        @AuraEnabled public String Name;

        public UserInner(User urs){
            this.Id = urs.Id;
            this.Name = urs.Name;
        }

        public User generateUser(){
            User urs = new User(
                Id = this.Id//,
                //Name = this.Name
            );

            return urs;
        }
    }

}