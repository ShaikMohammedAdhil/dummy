import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, CreditCard, MapPin, Calendar, LockKeyhole } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const CheckoutPage: React.FC = () => {
  const { items, totalPrice, clearCart } = useCart();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  
  const [activeStep, setActiveStep] = useState(isAuthenticated ? 1 : 0);
  const [address, setAddress] = useState({
    fullName: user?.name || '',
    mobile: '',
    pincode: '',
    address: '',
    city: '',
    state: '',
    addressType: 'home',
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvv: '',
  });
  
  // Calculate additional charges
  const deliveryCharge = totalPrice > 500 ? 0 : 40;
  const packagingFee = 49;
  const discount = Math.round(totalPrice * 0.05);
  const finalTotal = totalPrice + deliveryCharge + packagingFee - discount;
  
  const handleLoginRedirect = () => {
    navigate('/login', { state: { returnUrl: '/checkout' } });
  };
  
  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(2);
  };
  
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveStep(3);
    
    // Simulate order processing
    setTimeout(() => {
      // Order placed successfully
      clearCart();
      navigate('/order-success');
    }, 2000);
  };
  
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleCardDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardDetails({
      ...cardDetails,
      [e.target.name]: e.target.value,
    });
  };
  
  if (items.length === 0) {
    return (
      <div className="container-custom py-8">
        <div className="bg-white rounded-md shadow-sm p-8 text-center">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Please add some items to your cart before proceeding to checkout.</p>
          <Link to="/" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gray-100 py-6">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Content */}
          <div className="lg:w-8/12">
            {/* Checkout Steps */}
            <div className="bg-white rounded-md shadow-sm p-4 mb-6">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-xl font-bold">Checkout</h1>
                <div className="text-sm text-gray-500">
                  {items.length} {items.length === 1 ? 'item' : 'items'}
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row mb-6">
                <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 0 ? 'bg-flipkart-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                    1
                  </div>
                  <span className={`ml-2 ${activeStep >= 0 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    Login
                  </span>
                </div>
                <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-flipkart-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                    2
                  </div>
                  <span className={`ml-2 ${activeStep >= 1 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    Delivery Address
                  </span>
                </div>
                <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-flipkart-blue text-white' : 'bg-gray-200 text-gray-600'}`}>
                    3
                  </div>
                  <span className={`ml-2 ${activeStep >= 2 ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                    Payment
                  </span>
                </div>
              </div>
              
              {/* Login Step */}
              {activeStep === 0 && (
                <div className="border p-6 rounded-md">
                  <h2 className="text-lg font-medium mb-4">Login or Signup</h2>
                  <p className="text-gray-600 mb-6">
                    Please login to your account or sign up to continue with the checkout process.
                  </p>
                  <button 
                    onClick={handleLoginRedirect}
                    className="btn-primary"
                  >
                    Continue to Login
                  </button>
                </div>
              )}
              
              {/* Address Step */}
              {activeStep === 1 && (
                <div className="border p-6 rounded-md">
                  <h2 className="text-lg font-medium mb-4">Delivery Address</h2>
                  <form onSubmit={handleAddressSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={address.fullName}
                          onChange={handleAddressChange}
                          className="input-field"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          id="mobile"
                          name="mobile"
                          value={address.mobile}
                          onChange={handleAddressChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div>
                        <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                          Pincode
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={address.pincode}
                          onChange={handleAddressChange}
                          className="input-field"
                          required
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={address.city}
                          onChange={handleAddressChange}
                          className="input-field"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        Address (House No, Building, Street, Area)
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={address.address}
                        onChange={handleAddressChange}
                        rows={3}
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                        State
                      </label>
                      <select
                        id="state"
                        name="state"
                        value={address.state}
                        onChange={handleAddressChange}
                        className="input-field"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Type
                      </label>
                      <div className="flex space-x-4">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="addressType"
                            value="home"
                            checked={address.addressType === 'home'}
                            onChange={handleAddressChange}
                            className="mr-2"
                          />
                          <span>Home</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="addressType"
                            value="work"
                            checked={address.addressType === 'work'}
                            onChange={handleAddressChange}
                            className="mr-2"
                          />
                          <span>Work</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        type="submit"
                        className="bg-flipkart-orange hover:bg-orange-600 text-white py-2 px-6 rounded-sm font-medium transition-colors"
                      >
                        Deliver to this Address
                      </button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Payment Step */}
              {activeStep === 2 && (
                <div className="border p-6 rounded-md">
                  <h2 className="text-lg font-medium mb-4">Payment Options</h2>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Payment Methods */}
                    <div className="md:w-1/3 border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-6">
                      <div className="mb-4 text-sm font-medium text-gray-700">Select Payment Method</div>
                      <div className="space-y-2">
                        <label className={`flex items-center p-3 border rounded cursor-pointer ${paymentMethod === 'card' ? 'border-flipkart-blue bg-blue-50' : ''}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="card"
                            checked={paymentMethod === 'card'}
                            onChange={() => setPaymentMethod('card')}
                            className="mr-3"
                          />
                          <CreditCard size={18} className="mr-2" />
                          <span>Credit/Debit Card</span>
                        </label>
                        
                        <label className={`flex items-center p-3 border rounded cursor-pointer ${paymentMethod === 'netbanking' ? 'border-flipkart-blue bg-blue-50' : ''}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="netbanking"
                            checked={paymentMethod === 'netbanking'}
                            onChange={() => setPaymentMethod('netbanking')}
                            className="mr-3"
                          />
                          <span>Net Banking</span>
                        </label>
                        
                        <label className={`flex items-center p-3 border rounded cursor-pointer ${paymentMethod === 'upi' ? 'border-flipkart-blue bg-blue-50' : ''}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="upi"
                            checked={paymentMethod === 'upi'}
                            onChange={() => setPaymentMethod('upi')}
                            className="mr-3"
                          />
                          <span>UPI</span>
                        </label>
                        
                        <label className={`flex items-center p-3 border rounded cursor-pointer ${paymentMethod === 'cod' ? 'border-flipkart-blue bg-blue-50' : ''}`}>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value="cod"
                            checked={paymentMethod === 'cod'}
                            onChange={() => setPaymentMethod('cod')}
                            className="mr-3"
                          />
                          <span>Cash on Delivery</span>
                        </label>
                      </div>
                    </div>
                    
                    {/* Payment Details */}
                    <div className="md:w-2/3">
                      {paymentMethod === 'card' && (
                        <form onSubmit={handlePaymentSubmit}>
                          <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                placeholder="1234 5678 9012 3456"
                                value={cardDetails.cardNumber}
                                onChange={handleCardDetailsChange}
                                className="input-field pr-10"
                                required
                              />
                              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                <LockKeyhole size={16} className="text-gray-400" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="nameOnCard" className="block text-sm font-medium text-gray-700 mb-1">
                              Name on Card
                            </label>
                            <input
                              type="text"
                              id="nameOnCard"
                              name="nameOnCard"
                              value={cardDetails.nameOnCard}
                              onChange={handleCardDetailsChange}
                              className="input-field"
                              required
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry (MM/YY)
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  id="expiry"
                                  name="expiry"
                                  placeholder="MM/YY"
                                  value={cardDetails.expiry}
                                  onChange={handleCardDetailsChange}
                                  className="input-field"
                                  required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <Calendar size={16} className="text-gray-400" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV
                              </label>
                              <div className="relative">
                                <input
                                  type="password"
                                  id="cvv"
                                  name="cvv"
                                  placeholder="***"
                                  value={cardDetails.cvv}
                                  onChange={handleCardDetailsChange}
                                  className="input-field"
                                  required
                                />
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                  <LockKeyhole size={16} className="text-gray-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <button 
                            type="submit"
                            className="w-full bg-flipkart-orange hover:bg-orange-600 text-white py-3 rounded-sm font-medium transition-colors"
                          >
                            Pay ₹{finalTotal.toLocaleString()}
                          </button>
                        </form>
                      )}
                      
                      {paymentMethod === 'cod' && (
                        <div>
                          <p className="text-gray-600 mb-6">
                            You will pay for your order when it gets delivered to your doorstep.
                          </p>
                          <button 
                            onClick={handlePaymentSubmit}
                            className="w-full bg-flipkart-orange hover:bg-orange-600 text-white py-3 rounded-sm font-medium transition-colors"
                          >
                            Place Order
                          </button>
                        </div>
                      )}
                      
                      {(paymentMethod === 'netbanking' || paymentMethod === 'upi') && (
                        <div className="text-center py-8">
                          <p className="text-gray-600 mb-6">
                            This payment option is not available in the demo version.
                            Please select another payment method.
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Processing Step */}
              {activeStep === 3 && (
                <div className="border p-6 rounded-md text-center">
                  <div className="animate-pulse">
                    <h2 className="text-lg font-medium mb-4">Processing your order...</h2>
                    <p className="text-gray-600">
                      Please wait while we process your payment and confirm your order.
                    </p>
                    <div className="flex justify-center mt-6">
                      <div className="w-16 h-16 border-4 border-flipkart-blue border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-4/12">
            <div className="bg-white rounded-md shadow-sm p-4 sticky top-20">
              <h2 className="text-lg font-bold mb-4 pb-2 border-b">Order Summary</h2>
              
              <div className="max-h-60 overflow-y-auto mb-4">
                {items.map((item) => (
                  <div key={item.id} className="flex py-2 border-b last:border-b-0">
                    <div className="w-16 h-16 flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                    </div>
                    <div className="ml-3 flex-grow">
                      <div className="text-sm font-medium line-clamp-1">{item.name}</div>
                      <div className="text-xs text-gray-500">Quantity: {item.quantity}</div>
                      <div className="text-sm font-semibold mt-1">₹{(item.price * item.quantity).toLocaleString()}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Price ({items.length} items)</span>
                  <span>₹{totalPrice.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Discount</span>
                  <span className="text-flipkart-green">- ₹{discount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Delivery Charges</span>
                  {deliveryCharge === 0 ? (
                    <span className="text-flipkart-green">FREE</span>
                  ) : (
                    <span>₹{deliveryCharge}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Secured Packaging Fee</span>
                  <span>₹{packagingFee}</span>
                </div>
              </div>
              
              <div className="border-t py-3 mb-1">
                <div className="flex justify-between font-bold">
                  <span>Total Amount</span>
                  <span>₹{finalTotal.toLocaleString()}</span>
                </div>
              </div>
              
              {activeStep === 1 && (
                <div className="text-flipkart-green text-xs font-medium mb-4">
                  Your total savings on this order ₹{discount.toLocaleString()}
                </div>
              )}
              
              {/* Delivery Address Summary */}
              {activeStep >= 2 && (
                <div className="mt-4 pt-4 border-t">
                  <div className="flex items-start mb-2">
                    <MapPin size={18} className="mr-2 flex-shrink-0 text-flipkart-blue" />
                    <div>
                      <h4 className="text-sm font-medium">Deliver to: {address.fullName}</h4>
                      <p className="text-xs text-gray-600 mt-1">
                        {address.address}, {address.city}, {address.state} - {address.pincode}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Phone: {address.mobile}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;