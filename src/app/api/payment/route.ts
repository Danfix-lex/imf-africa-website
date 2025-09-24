import { NextRequest, NextResponse } from 'next/server';

// This would typically integrate with IMF Africa Pay API
// For now, we'll provide basic payment information and redirects

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const action = searchParams.get('action');

  switch (action) {
    case 'countries':
      return NextResponse.json({
        success: true,
        countries: [
          'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 'Cabo Verde',
          'Cameroon', 'Central African Republic', 'Chad', 'Comoros', 'Congo', 'Democratic Republic of the Congo',
          'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 'Eswatini', 'Ethiopia', 'Gabon',
          'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 'Ivory Coast', 'Kenya', 'Lesotho',
          'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 'Mauritania', 'Mauritius',
          'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 'Rwanda', 'Sao Tome and Principe',
          'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 'South Africa', 'South Sudan',
          'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 'Zambia', 'Zimbabwe'
        ]
      });
    
    case 'rates':
      const fromCountry = searchParams.get('from');
      const toCountry = searchParams.get('to');
      const amount = searchParams.get('amount');
      
      // Mock exchange rate calculation
      const mockRate = 1.02; // 2% fee
      const calculatedAmount = amount ? (parseFloat(amount) * mockRate).toFixed(2) : '0.00';
      
      return NextResponse.json({
        success: true,
        fromCountry,
        toCountry,
        amount,
        fee: amount ? (parseFloat(amount) * 0.02).toFixed(2) : '0.00',
        totalAmount: calculatedAmount,
        exchangeRate: mockRate,
        estimatedDelivery: '1-3 business days'
      });
    
    case 'payment-url':
      return NextResponse.json({
        success: true,
        paymentUrl: 'https://imf-africa-pay-1.onrender.com/',
        message: 'Redirecting to IMF Africa Pay platform'
      });
    
    default:
      return NextResponse.json({
        success: true,
        message: 'IMF Africa Payment API',
        endpoints: {
          countries: '/api/payment?action=countries',
          rates: '/api/payment?action=rates&from=Country&to=Country&amount=100',
          paymentUrl: '/api/payment?action=payment-url'
        }
      });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action, ...data } = body;

    switch (action) {
      case 'initiate-transfer':
        // In a real implementation, this would create a transfer record
        // and integrate with IMF Africa Pay API
        return NextResponse.json({
          success: true,
          transferId: `IMF${Date.now()}`,
          status: 'initiated',
          redirectUrl: 'https://imf-africa-pay-1.onrender.com/',
          message: 'Transfer initiated. Please complete payment on IMF Africa Pay platform.'
        });
      
      case 'track-transfer':
        const { transferId } = data;
        return NextResponse.json({
          success: true,
          transferId,
          status: 'pending',
          message: 'Please check your transfer status on the IMF Africa Pay platform'
        });
      
      default:
        return NextResponse.json({
          success: false,
          message: 'Invalid action'
        }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Internal server error'
    }, { status: 500 });
  }
}