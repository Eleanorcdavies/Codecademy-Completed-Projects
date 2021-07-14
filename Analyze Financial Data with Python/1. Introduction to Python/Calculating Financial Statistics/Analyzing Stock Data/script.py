from utils import *

def display_as_percentage(val):
  return '{:.1f}%'.format(val * 100)

amazon_prices = [1699.8, 1777.44, 2012.71, 2003.0, 1598.01, 1690.17, 1501.97, 1718.73, 1639.83, 1780.75, 1926.52, 1775.07, 1893.63]
ebay_prices = [35.98, 33.2, 34.35, 32.77, 28.81, 29.62, 27.86, 33.39, 37.01, 37.0, 38.6, 35.93, 39.5]

# Write code here
def get_returns(prices):
  returns=[]
  for i in range(len(prices)-1):
    start_price = prices[i]
    end_price = prices[i+1]
    log_return = calculate_log_return(start_price, end_price)
    returns.append(log_return)
  return returns

def returns_as_percentage(prices):
  get_returns(prices)
  returns = []
  for return_amount in prices:
    display_as_percentage(return_amount)
    returns.append(return_amount)
  return returns

amazon_returns = returns_as_percentage(amazon_prices)
ebay_returns = returns_as_percentage(ebay_prices)

# print(amazon_returns)
# print(ebay_returns)

def get_annual_returns(monthly_returns):
  annual_return = sum(monthly_returns)
  return annual_return

amazon_annual_returns = get_annual_returns(amazon_returns)
ebay_annual_returns = get_annual_returns(ebay_returns)

# print(display_as_percentage(amazon_annual_returns), display_as_percentage(ebay_annual_returns))

# Task 8
# amazon_variance = calculate_variance(amazon_prices)
# ebay_variance = calculate_variance(ebay_prices)
# print(amazon_variance, ebay_variance)

#Task 9
# print(display_as_percentage(calculate_stddev(amazon_prices)))
# print(display_as_percentage(calculate_stddev(ebay_prices)))

print(calculate_correlation(ebay_prices, amazon_prices))
