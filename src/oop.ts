// The fundamentals OOP is what we have already studied in JS but we are going to learn some new concepts also

class SuperHeros {
  Hero: string;
  SuperHero: String;

  constructor(Hero: string, SuperHero: string) {
    this.Hero = Hero;
    this.SuperHero = SuperHero;
  }

  SaveWorld() {
    console.log(`${this.Hero} saved the World`);
  }
}

const AnotherHero = new SuperHeros("IronMan", "BatMan");

AnotherHero.SaveWorld();
AnotherHero.Hero;
AnotherHero.SuperHero;

// "this" is basicaally a refence to the current execution context which is the object in which the method was called

// Now we have got the basic idea so, let's move ahead with that

// Access Modifiers: public, private, protected

// public: These are the properties or methods that can be accessed publicaly

// private: These are the properties or methods that can be accessed within the class only or you can build a reveal method form revealing its access

// protected: these are the properties or methods that can be accessed within the class or its sub-classes

// "_" is a prefix used with private or internal properties to distinguish them from the public properties

// Also there are getter and setter methods which can be used for getting or setting the internal properties

/*
enum Roles {
  Admin = "ADMIN",
  User = "USER",
}

class PostService {
  public DeletePost(userID: string, PostID: string) {
    //
  }
}

class UserService {
  public DeleteUser(userID: string, AdminPass: string) {
    //
  }
}

const postService = new PostService();
const userService = new UserService();

interface UserPreference {
  userLikedReels: number[];
  userLikedPosts: number[];
}

class LocalMethods {
  public async deletePost(userID: string, postID: string) {
    let response: object | null = null;
    try {
      response = await postService.DeletePost(userID, postID);
    } catch (error) {
      console.log(error);
      return false;
    }
    if (response) {
      return true;
    }
  }
  private async deleteUser(userID: string, AdminPass: string) {
    const response: string | null = null;
    try {
      response = await userService.DeleteUser(userID, AdminPass);
    } catch (error) {
      console.log(error);
      return false;
    }
    if (response) {
      return true;
    }
  }
  private _userPreference: UserPreference = {
    userLikedReels: [1, 2, 3, 4],
    userLikedPosts: [5, 6, 7, 8],
  };
  get userPreference() {
    return this._userPreference;
  }
  set userPreference(pref: UserPreference) {
    this._userPreference = pref;
  }
  get delUser() {
    return this.deletePost;
  }
}

const methods = new LocalMethods(); // here you will only see deletePost because it's a public method

const deleteUser = methods.delUser("1234", "9876");
const userPreference = methods.userPreference;
methods.userPreference = {
  userLikedReels: [1, 2, 3, 5],
  userLikedPosts: [7, 6, 7, 8],
};

// this is how we can use public, private, getters and setters

// now let's have a look on how can we use protected

class iceCream {
  protected ChocoloateFlav: string = "Chocolate";
}

class IceCreamParty extends iceCream {
  getChololateFlav(name: string): string {  // reveal method
    if (name === "Priyanshu") {
      return this.ChocoloateFlav;
    } else {
      return "It's not for you";
    }
  }
}

const ice = new IceCreamParty();
const chocolateIceCream = ice.getChololateFlav("Priyanshu");

*/

// then there are static methods - these are the methods which belongs to class itself and are accessed through class only

// also remember classes are name in PascalCase - naming convention
class Product {
  static name = "My product";
}

const prod = Product.name;

// You can also define abstract classes using abstract keyword these classes are used for defining the structure of a class

abstract class ProductType {
  abstract shippingDetails: string; 
  abstract shipProduct():void;
}

class ProdType extends ProductType{
  shippingDetails: string ="";
  shipProduct(): void {
    
  }
}

// there is also a concept of composition, sometimes it is preferred in place of inheritance

class Exp1 {
  constructor(public expDetails: object) {}
  expConductor() {
    // 
  }
}

class Exp2{
  constructor(public exp: Exp1){}
  expObserver() {
    // this.exp.    //you can use all the methods relevant to Exp1
  }
}