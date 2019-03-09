const BaseUrl = "https://www.merinothreads.com/api/v1/";
const URL = "https://www.merinothreads.com/";
const imageUrl = "https://www.merinothreads.com/";

const Url = {
  BaseUrl: imageUrl,
  CheckOut: imageUrl + "checkout/mobile",

  GetTemporaryToken: URL + "connect/token", //to generate temporary token
  Login: BaseUrl + "auth/login", //login Parameters:=> Email Password
  ChangePassword: BaseUrl + "user/changepassword", //formdata parameter=> OldPassword, NewPassword
  ForgotPassword: BaseUrl + "account/forgotpassword/", //login Parameters:=> Email Password
  RefreshTocken: BaseUrl + "user/refresh/token", // after login => use to refresh the login token
  UpdateProfile: BaseUrl + "user/picture/upload",
  SaveProfile: BaseUrl + "user/save",
  SaveAddress: BaseUrl + "user/address/save",
  Register: BaseUrl + "user/new", // to register a new user
  GetAllUserAddress: BaseUrl + "user/address/all",
  GetCountryList: BaseUrl + "country/all",
  GetPaymentMethod: BaseUrl + "payment/gateway/all",
  ExternalAuthentication: BaseUrl + "account/ExternalAuthentication", //GOOGLE AND FACEBOOK LOGIN

  // "UserLogin": BaseUrl + "account/login", //login Parameters:=> Email Password
  // "UserRegister": BaseUrl + "account/register",  // Register user Parameters => FirstName LastName Email Gender PhoneNumber Password ConfirmPassword

  GetBanner: BaseUrl + "banner/getbykey/", //{keyname:homepage}
  GetCategoryListmenu: BaseUrl + "category/listmenu",
  GetCategoryListimmediatechild: BaseUrl + "category/listimmediatechild/", //{parentcategoryid:1}  for getting childrens of specific category
  GetCategoryListCategoriesCount: BaseUrl + "category/listcategoriescount/", //{parent categoryid:1} for getting children category with product counts
  GetCategoryHomepage: BaseUrl + "category/homepage", //homepagecategory
  GetSearchProduct: BaseUrl + "product/searchproduct", // post method, body = { model }, multiPart body
  GetProductDetail: BaseUrl + "product/productdetail/", //{productid:25} provide details of the product along with cross sell,up sell, images,review

  GetBrandList: BaseUrl + "brand/list", //Get list of Brand
  GetOffer: BaseUrl + "offer/getbykey/", //{key:homedisplayoffer}

  GetCollectionGroup: BaseUrl + "collection/group/listbykey/", //{key:HomePageCollectionGroup ,}
  GetCollectionList: BaseUrl + "collection/active", //to show collections list
  GetCollectionById: BaseUrl + "collection/products/", //{CollectionId:1 }

  GetCart: BaseUrl + "cart/product/list", // {userId:1}/{sessioncode} if the user is logged in no need to send sessin code api provides teh list of products in the cart
  GetWishlist: BaseUrl + "wishlist/product/list", // {userid:1} get products in the wishlist  for logged in user not logged in user cannot add products to the wish list
  GetRecentView: BaseUrl + "recentview/list",

  AddToCart: BaseUrl + "cart/product/add", //ProductId Qty Variant Price => to add the product to cart
  RemoveFromCart: BaseUrl + "cart/product/remove", //parameters: productId => to remove from cart
  UpdateProductQuantity: BaseUrl + "cart/product/updatequantity", // [method post]  parameters: productId,quantity to update the product quantity from cart
  MoveToWishlist: BaseUrl + "cart/product/movetowishlist", //Parameter => ProductId

  AddToWishlist: BaseUrl + "wishlist/product/add", //Parameters: ProductId Variants => add product to wishlist
  RemoveFromWishlist: BaseUrl + "wishlist/product/remove", //parameters: productId => to remove from wishlist
  MoveToCart: BaseUrl + "wishlist/product/movetocart", // TO MOVE PRODUCT FROM Wishlist to Cart

  GetAutoSearch: BaseUrl + "product/searchproduct-autocomplete?term=", //GetMethod: parameter: {Text} AUTOSEARCH
  //FILTER
  GetCategoryFilter: BaseUrl + "category/listchildorsiblings/", // parameter {productId}
  GetBrandFilter: BaseUrl + "brand/list", //LIST BRAND FILTER
  GetManufacturerFilter: BaseUrl + "manufacturer/list", //LIST MANUFACTURER FILTER
  GetVendorFilter: BaseUrl + "vendor/list", //LIST VENDOR FILTER

  GetOrderList: BaseUrl + "order/all/", // for listing orders
  GetOrderDetails: BaseUrl + "order/detail/", //method => get parameter = {orderId}
  CancelOrder: BaseUrl + "order/cancel", //  method=> post, parameter: OrderId, CancellationReason, InvoiceNumber
  OrderReturn: BaseUrl + "order/return", //post method, parameter: OrderId,InvoiceNumber,ProductId,Quantity,ReturnReason
  ReturnReason: BaseUrl + "order/return/reason", //get method, Reason to Return order
  CancelReason: BaseUrl + "order/Cancel/reason", //get method, Reason to cancel order

  GetLatestProduct: BaseUrl + "Product/latest/", //query : page: 1, size:20
  GetSpecialProduct: BaseUrl + "Product/special/", // SPECIAL PRODUCT
  GetFeaturedProduct: BaseUrl + "Product/featured", //Featured Product
  GetOfferProduct: BaseUrl + "product/offer", //query ?page=1&size=20
  GetFilterCategoriesByBrand: BaseUrl + "category/categoriesbybrand/", //{brandId:1}
  GetRunningOffer: BaseUrl + "offer/running", //Slider
  GetOfferById: BaseUrl + "offer/productsbyid/", //{offerId}

  GetSetting: BaseUrl + "setting/get",
  GetHtmlContent: BaseUrl + "htmlcontent/", //{key: aboutUsMobile,}

  GetProductAvaiablitiyNotification:
    BaseUrl + "productnotification/availability/", //{ productid }
  GetPricedropNotification: BaseUrl + "productnotification/pricedrop/", //{productid}
  AddBulkOrder: BaseUrl + "bulkorder/add", //parameters : FirstName,LastName,Contact No,Email(Not Required) ,Address,Message(Not Required)
  CheckCoupon: BaseUrl + "coupon/amount/", //{parameters : coupon}

  GetPushNotification: BaseUrl + "pushnotification/getbyuser/", // pageNo/pageSize/{notificationTyps:order/general}
  AddPushnotificationDevice: BaseUrl + "pushnotification/adddevice" //{parametes: DeviceId, DeviceType  }
};

export default Url;
