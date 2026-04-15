import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Verify the secret token (optional but recommended)
    const secret = request.nextUrl.searchParams.get('secret');
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
    }

    // Get the document type from the webhook payload
    const documentType = body._type;
    
    // Revalidate based on document type
    if (documentType === 'caseStudy') {
      // Revalidate case studies listing page
      revalidatePath('/case-studies');
      
      // Revalidate the specific case study page if slug is provided
      if (body.slug?.current) {
        revalidatePath(`/case-studies/${body.slug.current}`);
      }
      
      // Revalidate homepage (featured work section)
      revalidatePath('/');
      
      return NextResponse.json({ 
        revalidated: true, 
        message: 'Case study pages revalidated',
        paths: ['/case-studies', `/case-studies/${body.slug?.current}`, '/']
      });
    }
    
    if (documentType === 'insight') {
      // Revalidate insights listing page
      revalidatePath('/insights');
      
      // Revalidate the specific insight page if slug is provided
      if (body.slug?.current) {
        revalidatePath(`/insights/${body.slug.current}`);
      }
      
      return NextResponse.json({ 
        revalidated: true, 
        message: 'Insight pages revalidated',
        paths: ['/insights', `/insights/${body.slug?.current}`]
      });
    }
    
    if (documentType === 'service') {
      // Revalidate services page
      revalidatePath('/services');
      
      return NextResponse.json({ 
        revalidated: true, 
        message: 'Services page revalidated',
        paths: ['/services']
      });
    }
    
    // Default: revalidate all main pages
    revalidatePath('/');
    revalidatePath('/case-studies');
    revalidatePath('/insights');
    revalidatePath('/services');
    
    return NextResponse.json({ 
      revalidated: true, 
      message: 'All pages revalidated' 
    });
    
  } catch (error) {
    console.error('Revalidation error:', error);
    return NextResponse.json(
      { message: 'Error revalidating', error: String(error) },
      { status: 500 }
    );
  }
}

// Allow GET requests for testing
export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');
  
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }
  
  return NextResponse.json({ 
    message: 'Revalidate API is working. Use POST to trigger revalidation.' 
  });
}
