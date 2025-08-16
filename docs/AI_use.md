# Gemini CLI Prompts for Shipsy Frontend Project

This document contains detailed, comprehensive prompts used to build the Shipsy logistics platform frontend using Gemini CLI. Each prompt includes full context and specifications for maximum clarity.

## 1. Initial Project Setup & Configuration


Create a comprehensive Next.js 14 project called 'Shipsy' for a modern logistics and shipment tracking platform. Set up the project with the following specifications:

- Use the new App Router architecture (not Pages Router)
- Configure TypeScript with strict mode enabled for type safety
- Install and configure Tailwind CSS with custom color palette for logistics branding (blues, grays, accent colors)
- Set up proper folder structure with /app, /components, /lib, /hooks, /styles directories
- Configure next.config.mjs with image optimization for shipment photos and logos
- Set up tsconfig.json with path aliases (@/ for root, @/components, @/lib, @/hooks)
- Initialize package.json with proper scripts for development, build, start, and linting
- Create a professional README.md with project description, setup instructions, and folder structure
- Configure .gitignore for Next.js projects with node_modules, .next, .env files
- Set up ESLint and Prettier configuration for code consistency across the team

The project should be enterprise-ready and scalable for a logistics company handling thousands of shipments daily.


## 2. shadcn/ui Component Library Integration


Set up shadcn/ui component library as the primary UI framework for the Shipsy logistics platform with comprehensive component integration:

- Initialize shadcn/ui with proper configuration in components.json
- Install all essential components needed for a logistics dashboard:
  * Button (primary, secondary, destructive, outline variants)
  * Card (for shipment cards, statistics, and content containers)
  * Table (for shipment listings with sorting and pagination)
  * Form components (Input, Textarea, Select, Checkbox, Radio groups)
  * Dialog and AlertDialog (for shipment details and confirmations)
  * DropdownMenu (for actions and user menus)
  * Badge (for shipment status indicators)
  * Tabs (for dashboard sections and shipment details)
  * Sheet (for mobile navigation and side panels)
  * Toast (for notifications and alerts)
  * Progress (for shipment tracking progress bars)
  * Calendar (for date picking in shipment scheduling)
  * Command (for search functionality)
  * Pagination (for large shipment lists)

- Configure proper color scheme and design tokens for logistics industry
- Set up component variants that match logistics platform requirements
- Ensure all components are accessible (ARIA labels, keyboard navigation)
- Create custom CSS variables for consistent theming across components
- Test all components work properly with TypeScript and Tailwind CSS


## 3. Giving context about project


all necessary dependencies for a full-featured logistics platform with the following comprehensive setup:

CORE DEPENDENCIES:
- React Hook Form with @hookform/resolvers for robust form handling in shipment creation
- Zod for runtime type validation and form schema validation
- Axios for HTTP requests to logistics APIs and backend services
- Lucide React for consistent iconography (shipping, tracking, location icons)
- next-themes for dark/light mode toggle suitable for 24/7 logistics operations
- date-fns or dayjs for date manipulation in shipment scheduling and tracking

ADDITIONAL INTEGRATIONS:
- Configure proper TypeScript types for all dependencies
- Set up environment variables structure for API endpoints
- Configure Axios interceptors for authentication and error handling
- Set up proper import/export structure for components and utilities
- Create utility functions for common logistics operations (date formatting, status mapping)


## 4. Professional Landing Page Development


Create a stunning, conversion-optimized landing page for Shipsy logistics platform that showcases the company's capabilities and drives user engagement:

HERO SECTION:
- Design a compelling hero section with powerful headline: "Revolutionize Your Logistics Operations" or similar
- Include sub-headline explaining Shipsy's value proposition for businesses
- Add two prominent CTAs: "Start Free Trial" and "Watch Demo"
- Include hero image/video showcasing logistics operations, trucks, warehouses
- Add trust indicators: "Trusted by 500+ companies" or customer logos
- Implement smooth scroll animations and micro-interactions

FEATURES SECTION:
- Create 4-6 feature cards highlighting key capabilities:
  * Real-Time Tracking: GPS tracking, live updates, delivery notifications
  * Data-Driven Insights: Analytics dashboard, performance metrics, cost optimization
  * Team Collaboration: Multi-user access, role-based permissions, communication tools
  * Automated Workflows: Route optimization, automated dispatching, smart scheduling
  * Integration Capabilities: API access, third-party integrations, existing system compatibility
  * 24/7 Support: Round-the-clock customer service, technical support, account management

- Each feature should have an icon, title, description, and "Learn More" link
- Include relevant statistics or benefits for each feature
- Add hover effects and smooth transitions

SOCIAL PROOF SECTION:
- Customer testimonials with photos, names, companies, and detailed reviews
- Case studies showcasing ROI improvements and operational efficiency gains
- Company logos of major clients (if available) or placeholder professional logos
- Statistics: shipments processed, money saved, time reduced, customer satisfaction scores

ADDITIONAL SECTIONS:
- How It Works: 3-step process (Sign Up → Set Up Shipments → Track & Optimize)
- Pricing preview or "Contact for Custom Pricing"
- FAQ section addressing common logistics concerns
- Newsletter signup with logistics industry insights
- Footer with comprehensive links, contact info, and social media

TECHNICAL REQUIREMENTS:
- Fully responsive design optimized for desktop, tablet, and mobile
- Fast loading times with optimized images and lazy loading
- SEO-optimized with proper meta tags, structured data, and semantic HTML
- Accessibility compliant (WCAG 2.1 AA standards)
- Google Analytics and conversion tracking ready
- Professional typography using Inter or similar modern font


## 5. Responsive Navigation System


Build a comprehensive navigation system that works seamlessly across all devices and provides excellent user experience for the Shipsy platform:

DESKTOP NAVIGATION:
- Create a fixed header with company logo (Shipsy branding with logistics icon)
- Main navigation menu with items: Home, Features, Solutions, Pricing, About, Contact
- Secondary navigation: Login and "Get Started" buttons with distinct styling
- Add subtle shadow and backdrop blur when scrolling
- Include search functionality for later use
- Implement active link highlighting and smooth hover transitions

MOBILE NAVIGATION:
- Hamburger menu with smooth slide-in animation from right side
- Full-screen overlay with navigation items prominently displayed
- Touch-friendly button sizes (minimum 44px touch targets)
- Smooth transitions and proper gesture handling
- Close button and background tap to close functionality
- Preserve navigation state when switching between mobile/desktop

NAVIGATION FEATURES:
- Dropdown menus for Solutions (by industry: E-commerce, Manufacturing, Retail, etc.)
- Breadcrumb navigation for dashboard pages
- User profile dropdown (when logged in) with Dashboard, Settings, Logout options
- Language selector for international logistics operations
- Dark/light mode toggle button
- Notification badge for important updates

RESPONSIVE BEHAVIOR:
- Breakpoints: Mobile (<768px), Tablet (768px-1024px), Desktop (>1024px)
- Progressive enhancement from mobile-first design
- Flexible logo sizing and menu item spacing
- Proper focus management for keyboard navigation
- Screen reader compatible with proper ARIA labels

STYLING SPECIFICATIONS:
- Background: Clean white with subtle border-bottom
- Logo: Professional logistics-themed icon with "Shipsy" wordmark
- Menu items: Clean typography with blue accent colors on hover/active
- CTAs: Primary blue button for "Get Started", outlined button for "Login"
- Mobile menu: Dark overlay with smooth slide animations
- Z-index management to ensure proper layering with other components


## 6. Professional Footer Component


Design and implement a comprehensive footer that serves as the foundation of the Shipsy platform and provides essential information for logistics professionals:

FOOTER STRUCTURE (4-column layout on desktop, stacked on mobile):

COLUMN 1 - COMPANY BRANDING:
- Shipsy logo with tagline: "Smart Logistics Solutions"
- Brief company description (2-3 sentences about revolutionizing logistics)
- Social media icons linking to: LinkedIn, Twitter, Facebook, YouTube
- Professional address with headquarters location
- "Trusted by logistics professionals worldwide" message

COLUMN 2 - PRODUCT LINKS:
- Solutions submenu:
  * Shipment Tracking
  * Route Optimization
  * Inventory Management
  * Analytics Dashboard
  * API Integration
  * Mobile Apps


COLUMN 3 - COMPANY INFORMATION:
- About Us
- Careers (with "We're Hiring!" badge)
- Press & Media
- Customer Stories
- Partner Program
- Security & Compliance
- Terms of Service
- Privacy Policy
- Cookie Policy

COLUMN 4 - SUPPORT & CONTACT:
- 24/7 Support Center
- Help Documentation
- API Documentation
- System Status
- Contact Sales
- Request Demo
- Emergency Support Hotline
- Email: support@shipsy.com
- Phone: +1 (555) 123-SHIP

ADDITIONAL FOOTER ELEMENTS:
- Newsletter subscription with industry insights and updates
- "Start Free Trial" CTA button prominently placed
- Awards and certifications (SOC 2, ISO 27001, etc.)
- Integration partner logos (if applicable)
- Language selector for international markets

FOOTER BOTTOM:
- Copyright notice: © 2024 Shipsy. All rights reserved.
- Legal links: Terms, Privacy, Cookies
- "Made with ❤ for logistics professionals"
- Back to top arrow button

STYLING & RESPONSIVENESS:
- Dark background (#1a1a1a) with white text for professional appearance
- Proper contrast ratios for accessibility
- Hover effects on all links with subtle color transitions
- Mobile-responsive with proper stacking and spacing
- Consistent typography hierarchy
- Social media icons with brand colors on hover
- Newsletter input with professional styling and validation
- Proper spacing and visual hierarchy for easy scanning


## 7. Comprehensive Authentication System


Create a robust, enterprise-grade authentication system for the Shipsy logistics platform with complete user management and security features:

AUTHENTICATION ARCHITECTURE:
- Implement NextAuth.js or custom JWT-based authentication
- Create AuthGuard component to protect dashboard routes and sensitive pages
- Set up authentication context/provider for global state management
- Configure middleware for route protection and automatic redirects
- Implement role-based access control (Admin, Manager, Driver, Customer)

DYNAMIC ROUTING STRUCTURE:
- Create /app/(auth)/[slug] dynamic routes for flexible authentication pages:
  * /login - User sign-in with email/password
  * /register - New user registration with company details

USER REGISTRATION FLOW:
- Multi-step registration form for business accounts:
  * Step 1: Basic info (name, password with strength indicator)
- Form validation with real-time feedback and error messages
- Password requirements: minimum 6 characters

LOGIN FUNCTIONALITY:
- Clean, professional login form with company branding
- username and password fields with proper validation

SECURITY FEATURES:
- Password hashing with bcrypt or similar
- JWT token management with refresh token rotation
- Session management with automatic timeout
- CSRF protection and secure headers
- Rate limiting for authentication endpoints
- Account verification via email links
- Password reset tokens with expiration
- Audit logging for authentication events

UI/UX SPECIFICATIONS:
- Professional form design with shadcn/ui components
- Loading states during authentication processes
- Clear error messages and success notifications
- Responsive design for mobile and desktop
- Accessibility compliance with proper ARIA labels
- Smooth transitions and micro-interactions
- Company logo and branding elements
- Progress indicators for multi-step flows


## 8. Advanced Registration Forms


Build sophisticated registration forms tailored for logistics companies with comprehensive data collection and validation:

BUSINESS REGISTRATION FORM:
- Company Information Section:
  * Company Name (required, minimum 2 characters)
  * Business Registration Number
  * Tax ID/VAT Number
  * Company Size dropdown (1-10, 11-50, 51-200, 201-1000, 1000+ employees)
  * Industry Selection (E-commerce, Manufacturing, Retail, Healthcare, Automotive, etc.)
  * Annual Shipment Volume (0-100, 100-1000, 1000-10000, 10000+ shipments)

- Primary Contact Details:
  * First Name and Last Name (required)
  * Job Title/Position
  * Work Email (primary account email)
  * Work Phone Number with country code selector
  * Direct Line/Extension

- Business Address Information:
  * Street Address (with autocomplete suggestions)
  * City, State/Province, ZIP/Postal Code
  * Country selection with flag icons
  * Timezone selection for proper scheduling
  * Multiple location support for enterprise accounts

- Account Preferences:
  * Preferred Communication Language
  * Currency Selection for invoicing
  * Notification Preferences (email, SMS, in-app)
  * Marketing Communication Opt-in
  * Terms of Service and Privacy Policy acceptance

VALIDATION & UX FEATURES:
- Real-time field validation with inline error messages
- Email verification with confirmation link
- Phone number validation with country-specific formats
- Business email validation (no personal email domains)
- Duplicate company/email checking
- Auto-save draft functionality for long forms
- Progress indicator showing completion percentage
- Field dependencies (show/hide based on selections)

FORM STYLING & INTERACTIONS:
- Multi-step wizard with clear navigation
- Professional form layout with proper spacing
- Conditional field display based on company size/type
- Helper text and tooltips for complex fields
- File upload for company logo/documents
- Save and continue later functionality
- Form validation summary before submission
- Success page with next steps and onboarding checklist


## 9. Comprehensive Dashboard Overview


Create a feature-rich, data-driven dashboard that serves as the central hub for logistics operations with real-time insights and actionable analytics:

DASHBOARD LAYOUT & STRUCTURE:
- Header with user profile, notifications, search, and quick actions
- Sidebar navigation with collapsible menu and role-based items
- Main content area with responsive grid layout
- Welcome section with personalized greeting and weather for logistics planning
- Quick action buttons: Create Shipment, Track Package, Generate Report, Contact Support

KEY PERFORMANCE INDICATORS (KPI CARDS):
- Total Shipments: Current month vs previous month with percentage change
- In-Transit Shipments: Real-time count with estimated delivery times
- Delivered Successfully: Success rate percentage with trend indicator
- Pending/Delayed: Count with urgency indicators and required actions
- Revenue Metrics: Monthly revenue, average shipment value, profit margins
- Customer Satisfaction: Average rating, recent feedback, NPS score
- Fleet Utilization: Vehicle usage percentage, driver availability
- Cost per Shipment: Average costs with breakdown and optimization suggestions

INTERACTIVE CHARTS & VISUALIZATIONS:
- Shipment Volume Trends: Line chart showing daily/weekly/monthly patterns
- Geographic Distribution: Interactive map showing shipment origins and destinations
- Delivery Performance: Bar chart comparing on-time vs delayed deliveries
- Revenue Analytics: Area chart showing revenue trends over time
- Route Efficiency: Pie chart showing route optimization savings
- Customer Distribution: Donut chart showing customer segments
- Peak Hours Analysis: Heatmap showing busy times for planning

REAL-TIME FEATURES:
- Live shipment tracking with GPS coordinates
- Real-time notifications for delivery updates, delays, and exceptions
- Active alerts panel for urgent shipments and critical issues
- Weather alerts affecting delivery routes
- Traffic updates for route optimization
- Driver status and location tracking
- Inventory level alerts for warehouse management

QUICK ACCESS SECTIONS:
- Recent Shipments: Last 10 shipments with status and quick actions
- Today's Deliveries: Scheduled deliveries with time slots and driver assignments
- Urgent Shipments: Priority deliveries requiring immediate attention
- Customer Requests: Recent inquiries and support tickets
- System Notifications: Updates, maintenance schedules, feature announcements

CUSTOMIZATION & PERSONALIZATION:
- Draggable dashboard widgets for custom layouts
- Hide/show widgets based on user role and preferences
- Custom date ranges for all analytics
- Saved dashboard views for different scenarios
- Export functionality for reports and charts
- Dark/light mode with system preference detection
- Responsive design adapting to screen sizes

PERFORMANCE & TECHNICAL:
- Lazy loading for charts and heavy components
- Real-time data updates via WebSocket connections
- Caching strategies for frequently accessed data
- Error boundaries with graceful fallbacks
- Loading skeletons for all dashboard components
- Offline support with cached data display


## 10. Advanced Shipment Management System


Build a comprehensive shipment management interface that handles the entire logistics workflow from creation to delivery with enterprise-level features:

DATA TABLE ARCHITECTURE:
- Implement a sophisticated data table using shadcn/ui Table components with the following columns:
  * Tracking ID: Unique identifier with copy-to-clipboard functionality
  * Origin: Pickup location with address and contact details
  * Destination: Delivery address with recipient information
  * Status: Dynamic badge system (Created, Picked Up, In Transit, Out for Delivery, Delivered, Exception)
  * Service Type: Express, Standard, Economy with corresponding icons
  * Created Date: Formatted date with relative time (2 days ago)
  * Expected Delivery: Countdown timer and date with timezone handling
  * Weight/Dimensions: Package specifications with units
  * Value: Declared value with currency formatting
  * Actions: Dropdown menu with contextual options

ADVANCED FILTERING SYSTEM:
- Multi-criteria filter panel with collapsible sections:
  * Date Range Picker: Custom date ranges, presets (Today, This Week, This Month, Last 30 Days)
  * Status Filter: Multi-select with status counts and color indicators
  * Service Type Filter: Checkboxes for different shipping options
  * Origin/Destination Filter: Location-based filtering with autocomplete
  * Customer Filter: Search and select specific customers
  * Value Range: Min/max declared value filtering
  * Weight Range: Package weight filtering
  * Driver Assignment: Filter by assigned drivers

SEARCH & SORTING FUNCTIONALITY:
- Global search across all shipment fields (tracking ID, customer name, addresses)
- Column-specific search with debounced input
- Multi-column sorting with visual indicators
- Sort by priority, urgency, delivery date
- Save search queries and filters as presets
- Export filtered results to CSV/Excel
- Bulk selection with checkbox column

TABLE FEATURES & INTERACTIONS:
- Pagination with configurable page sizes (10, 25, 50, 100 items)
- Virtual scrolling for large datasets (1000+ shipments)
- Row selection for bulk operations
- Expandable rows showing additional shipment details
- Context menu on right-click with quick actions
- Drag and drop for priority reordering
- Sticky header and column freezing
- Responsive column hiding on smaller screens

BULK OPERATIONS:
- Bulk status updates for multiple shipments
- Bulk driver assignment and route optimization
- Bulk export and report generation
- Bulk notifications to customers
- Bulk cancellation with confirmation dialogs
- Bulk label printing and documentation

STATUS MANAGEMENT:
- Color-coded status badges with tooltips
- Status history timeline for each shipment
- Automated status updates from tracking APIs
- Manual status override with reason tracking
- Status-based notifications and alerts
- Exception handling with escalation workflows

REAL-TIME UPDATES:
- WebSocket connection for live status updates
- Real-time shipment tracking on map
- Push notifications for critical status changes
- Auto-refresh functionality with user control
- Optimistic updates for immediate feedback
- Conflict resolution for concurrent updates


## 11. Comprehensive Shipment Creation Form


Develop a sophisticated shipment creation form that captures all necessary logistics information with intelligent features and validation:

FORM STRUCTURE & WORKFLOW:
- Multi-step wizard with progress indicator and step validation:
  * Step 1: Pickup Information
  * Step 2: Delivery Information  
  * Step 3: Package Details
  * Step 4: Service Options
  * Step 5: Review & Confirmation

PICKUP INFORMATION SECTION:
- Sender Details:
  * Company/Individual Name (with customer database lookup)
  * Contact Person Name and Title
  * Phone Number with country code and extension
  * Email Address with validation
  * Special Instructions for pickup
- Pickup Address:
  * Street Address with Google Maps autocomplete
  * Apartment/Suite/Floor details
  * City, State/Province, ZIP/Postal Code
  * Country selection with flag icons
  * Pickup Location Type (Residence, Business, Warehouse)
  * Access Instructions (Gate Code, Loading Dock, etc.)
- Pickup Scheduling:
  * Pickup Date with calendar widget
  * Time Window Selection (Morning, Afternoon, Evening, Specific Time)
  * Recurring Pickup Options (Daily, Weekly, Monthly)
  * Preferred Pickup Time with timezone handling
  * Special Pickup Requirements (Lift Gate, Inside Pickup, etc.)

DELIVERY INFORMATION SECTION:
- Recipient Details:
  * Recipient Name and Company
  * Phone Number with SMS notification opt-in
  * Email Address for tracking notifications
  * Delivery Instructions and Special Requirements
  * Signature Requirements (Adult, Any, None)
- Delivery Address:
  * Complete address with validation and autocomplete
  * Address Book integration for frequent destinations
  * GPS coordinates for precise location
  * Delivery Location Type and Access Information
  * Alternative Contact for Delivery Attempts
- Delivery Options:
  * Preferred Delivery Date and Time Window
  * Weekend/Holiday Delivery Options
  * Delivery Confirmation Requirements
  * Leave at Door/Secure Location Options
  * Appointment Scheduling for Large Items

PACKAGE DETAILS SECTION:
- Physical Specifications:
  * Package Count with individual item tracking
  * Weight per Package (with unit conversion)
  * Dimensions (Length × Width × Height) with unit selection
  * Total Weight and Dimensional Weight Calculation
  * Package Type (Box, Envelope, Tube, Pallet, etc.)
- Content Information:
  * Detailed Item Description for each package
  * Declared Value with currency selection
  * Fragile/Hazardous Material Indicators
  * Insurance Options with automatic calculation
  * Customs Information for International Shipments
  * Special Handling Requirements (Keep Upright, Refrigerated, etc.)

SERVICE OPTIONS & PRICING:
- Shipping Service Selection:
  * Express Delivery (Same Day, Next Day)
  * Standard Ground Shipping
  * Economy Options with longer transit times
  * International Shipping Services
  * White Glove/Special Services
- Additional Services:
  * Package Insurance with value-based pricing
  * Signature Confirmation Options
  * Saturday/Holiday Delivery
  * Real-time Tracking and Notifications
  * Photo Proof of Delivery
  * Return Shipping Labels
- Pricing Display:
  * Real-time rate calculation from multiple carriers
  * Service comparison table with transit times
  * Additional fees breakdown (fuel, residential, etc.)
  * Discount application (volume, loyalty, promotional)
  * Total cost summary with tax calculation

FORM VALIDATION & UX:
- Real-time field validation with specific error messages
- Address validation with correction suggestions
- Weight/dimension validation with carrier limits
- Incompatible service option warnings
- Required field highlighting and progressive validation
- Auto-save functionality to prevent data loss
- Form data persistence across browser sessions
- Mobile-optimized input fields and interactions

SMART FEATURES:
- Customer profile auto-fill from previous shipments
- Address book integration with search and selection
- Duplicate shipment detection and suggestions
- Rate shopping across multiple carriers
- Delivery time estimates based on distance and service
- Customs documentation auto-generation
- Label template selection and customization
- Integration with inventory management systems


## 12. AI-Powered Chatbot Integration


Develop an intelligent AI chatbot system specifically designed for logistics operations with advanced natural language processing and context-aware responses:

CHATBOT ARCHITECTURE & DESIGN:
- Floating Action Button (FAB) positioned in bottom-right corner with pulsing animation
- Expandable chat window (350px width, 500px height) with smooth slide-up animation
- Professional chat interface with company branding and logistics-themed colors
- Minimizable/expandable states with conversation persistence
- Mobile-responsive design with full-screen chat on mobile devices
- Dark/light theme support matching the main application theme

CORE FUNCTIONALITY:
- Context-aware conversations about shipment tracking, logistics operations, and customer support
- Integration with shipment database for real-time tracking information
- Natural language processing for complex logistics queries
- Multi-language support for international operations
- Voice input capability for hands-free operation
- File upload support for shipping documents and images

CONVERSATION FEATURES:
- Welcome message: "Hi! I'm your Shipsy AI assistant. I can help you with shipment tracking, scheduling, route optimization, and answer any logistics questions. How can I assist you today?"
- Message history persistence across sessions
- Typing indicators with realistic delay simulation
- Message timestamps with relative time display
- Read receipts and delivery confirmations
- Message search functionality within conversation history
- Export conversation transcripts for record keeping

INTELLIGENT RESPONSES & CAPABILITIES:
- Shipment Tracking: "Track my shipment #SH123456" → Real-time status, location, estimated delivery
- Route Optimization: "What's the best route from NYC to LA?" → Optimized routes, traffic considerations
- Cost Estimation: "How much to ship 50lbs from Chicago to Miami?" → Instant pricing with service options
- Delivery Scheduling: "Schedule pickup for tomorrow morning" → Calendar integration and confirmation
- Documentation Help: "I need customs forms for international shipping" → Document templates and guidance
- Troubleshooting: "My shipment is delayed, what should I do?" → Problem resolution steps and alternatives
- Reporting: "Show me last month's delivery performance" → Data insights and analytics

ADVANCED AI FEATURES:
- Learning from conversation patterns to improve responses
- Integration with knowledge base for accurate logistics information
- Escalation to human agents for complex issues
- Proactive notifications about shipment updates and potential issues
- Predictive suggestions based on user behavior and history
- Integration with external APIs (weather, traffic, carrier systems)
- Sentiment analysis to detect customer frustration and provide appropriate responses

TECHNICAL IMPLEMENTATION:
- WebSocket connection for real-time messaging
- Message queuing for reliable delivery
- Rate limiting to prevent spam and abuse
- Error handling with graceful fallbacks
- Offline message queuing with sync when reconnected
- Analytics tracking for conversation effectiveness
- A/B testing capabilities for response optimization

UI/UX SPECIFICATIONS:
- Smooth animations and micro-interactions throughout
- Message bubbles with user/bot distinction (colors, alignment)
- Loading states with skeleton screens during AI processing
- Error states with retry mechanisms
- Accessibility features (screen reader support, keyboard navigation)
- Quick reply buttons for common queries
- Suggested questions based on current context
- Clear visual hierarchy and professional typography


## 13. Comprehensive API Integration


Create a robust API layer for the Shipsy platform with comprehensive error handling, authentication, and real-time capabilities:

API ROUTE STRUCTURE:
/api/auth/ - Authentication endpoints
/api/order/ - Shipment CRUD operations
/api/chat/ - AI chatbot communication
/api/bot/advanced/ - Advanced bot features and integrations

CHAT API IMPLEMENTATION (/api/chat/route.js):
- POST endpoint for sending messages to AI system
- Integration with OpenAI GPT or similar for natural language processing
- Context management for conversation continuity
- Response streaming for real-time typing effects
- Rate limiting (10 requests per minute per user)
- Message validation and sanitization
- Conversation logging for analytics and improvement
- Error handling with user-friendly messages

Request Format:
{
  "message": "Track my shipment SH123456",
  "conversationId": "conv_abc123",
  "userId": "user_456",
  "context": {
    "currentPage": "dashboard",
    "recentShipments": [...],
    "userRole": "customer"
  }
}

Response Format:
{
  "response": "Your shipment SH123456 is currently in transit...",
  "suggestions": ["Get delivery estimate", "Update delivery address"],
  "actions": [{"type": "track", "shipmentId": "SH123456"}],
  "conversationId": "conv_abc123",
  "timestamp": "2024-08-16T10:30:00Z"
}

ADVANCED BOT API (/api/bot/advanced/route.js):
- Advanced NLP processing for complex logistics queries
- Integration with external APIs (weather, traffic, carrier systems)
- Proactive notification generation based on shipment events
- Automated workflow triggers (send notifications, update statuses)
- Machine learning model integration for predictive analytics
- Document processing and information extraction
- Multi-step conversation handling for complex operations

AUTHENTICATION & SECURITY:
- JWT token validation for all protected endpoints
- Role-based access control (RBAC) implementation
- API rate limiting with Redis or similar
- Request/response logging for audit trails
- Input validation and sanitization
- CORS configuration for frontend integration
- Encryption for sensitive data transmission

ERROR HANDLING STRATEGY:
- Standardized error response format across all endpoints
- HTTP status codes with descriptive error messages
- Retry mechanisms for transient failures
- Circuit breaker pattern for external service calls
- Graceful degradation when services are unavailable
- Error tracking and monitoring integration

REAL-TIME FEATURES:
- WebSocket endpoints for live shipment tracking
- Server-sent events for real-time notifications
- Push notification integration (Firebase, OneSignal)
- Real-time chat message delivery
- Live dashboard updates for metrics and KPIs
- Event-driven architecture for system integration

PERFORMANCE OPTIMIZATION:
- Response caching with appropriate TTL values
- Database query optimization and indexing
- API response compression
- Pagination for large datasets
- Background job processing for heavy operations
- CDN integration for static assets


## 14. Real-time Shipment Tracking System


Implement a comprehensive real-time tracking system that provides detailed visibility into shipment progress with interactive features and proactive updates:

TRACKING TIMELINE COMPONENTS:
- Order Placed: Timestamp, order details, pickup scheduling
- Pickup Confirmed:
- In Transit: 
- Out for Delivery
- Delivered


## 15. Advanced Data Management & Export Features


Implement comprehensive data management capabilities for enterprise logistics operations with advanced filtering, reporting, and export functionalities:

BULK OPERATIONS SYSTEM:
- Multi-selection interface with checkbox controls and "Select All" functionality
- Bulk status updates for hundreds of shipments simultaneously
- Bulk driver assignment with workload balancing algorithms
- Bulk route optimization for multiple shipments to similar destinations
- Bulk notification sending to customers with customizable message templates
- Bulk label printing with batch processing and queue management
- Bulk cancellation with reason tracking and automatic customer notifications
- Bulk rescheduling with intelligent date/time suggestions

ADVANCED FILTERING ENGINE:
- Saved filter presets for common scenarios (Today's Deliveries, Overdue Shipments, High-Value Items)
- Complex query builder with AND/OR logic operators
- Date range filtering with relative and absolute date options
- Geographic filtering by region, state, city, or custom radius
- Customer tier filtering (VIP, Standard, New) with special handling rules
- Service level filtering (Express, Standard, Economy) with performance metrics
- Exception filtering (Delayed, Damaged, Lost, Returned) with escalation workflows
- Custom field filtering for industry-specific requirements

SEARCH & DISCOVERY:
- Global search across all shipment data with relevance scoring
- Advanced search with field-specific queries and boolean operators
- Fuzzy search for handling typos and partial matches
- Search history and saved searches for frequently used queries
- Real-time search suggestions and auto-complete functionality
- Search result highlighting and context display
- Search analytics to understand user behavior and optimize results

PERFORMANCE OPTIMIZATION:
- Lazy loading for large datasets with virtual scrolling
- Client-side caching for frequently accessed data
- Background processing for heavy operations
- Progress indicators for long-running exports and operations
- Optimized database queries with proper indexing
- Pagination strategies for different data access patterns
- Memory management for large dataset operations


## 16. Professional UI Polish & Responsive Design


Enhance the entire Shipsy platform with professional UI polish, comprehensive responsive design, and exceptional user experience across all devices:

LOADING STATES & SKELETONS:
- Skeleton loading screens for all major components (dashboard cards, tables, forms)
- Progressive loading for complex pages with prioritized content rendering
- Shimmer effects for data tables and card layouts
- Loading spinners with percentage indicators for file uploads and data processing
- Smooth transitions between loading and loaded states
- Context-aware loading messages ("Loading your shipments...", "Processing payment...")
- Graceful handling of slow network conditions with timeout messages

ERROR HANDLING & USER FEEDBACK:
- Comprehensive error boundary implementation with fallback UI
- User-friendly error messages with actionable steps for resolution
- Network error detection with retry mechanisms and offline indicators
- Form validation errors with inline feedback and field-specific guidance
- Toast notifications for success/error states with appropriate timing
- Empty states with illustration and clear call-to-action buttons
- 404 and 500 error pages with navigation back to main application

RESPONSIVE DESIGN STRATEGY:
- Mobile-first approach with progressive enhancement for larger screens
- Breakpoint system: Mobile (320px-768px), Tablet (768px-1024px), Desktop (1024px+)
- Flexible grid layouts that adapt gracefully across all screen sizes
- Touch-friendly interface elements with minimum 44px touch targets
- Optimized typography scale for different device categories
- Navigation patterns that work seamlessly on mobile and desktop
- Performance optimization for mobile devices with slower processors

MICRO-INTERACTIONS & ANIMATIONS:
- Smooth page transitions with appropriate easing functions
- Hover effects on interactive elements with subtle color changes
- Button press animations with visual feedback
- Form input focus states with clear visual indicators
- Table row hover effects and selection animations
- Modal and dialog entrance/exit animations
- Loading animation sequences that don't feel jarring
- Success animations for completed actions (checkmarks, confetti)

ACCESSIBILITY COMPLIANCE:
- WCAG 2.1 AA compliance across all components
- Proper ARIA labels and landmarks for screen readers
- Keyboard navigation support with visible focus indicators
- Color contrast ratios meeting accessibility standards
- Alternative text for all images and icons
- Semantic HTML structure with proper heading hierarchy
- Screen reader friendly table structures with proper headers
- Form labels and error messages accessible to assistive technologies

PERFORMANCE OPTIMIZATION:
- Code splitting with lazy loading for route-based components
- Image optimization with next/image and proper sizing
- Font optimization with preloading and font-display: swap
- Critical CSS inlining for above-the-fold content
- Bundle size optimization with tree shaking and dead code elimination
- Service worker implementation for offline capabilities
- Performance monitoring with Core Web Vitals tracking

VISUAL CONSISTENCY:
- Unified design system with consistent spacing, colors, and typography
- Component library documentation with usage guidelines
- Icon system with consistent stroke width and visual weight
- Professional color palette suitable for logistics industry
- Consistent button styles and states across all contexts
- Unified form styling with proper alignment and spacing
- Consistent card layouts and content hierarchy


## 17. Advanced Theme System & Customization


Implement a sophisticated theming system for the Shipsy platform that supports multiple themes, custom branding, and enterprise-level customization:

THEME PROVIDER ARCHITECTURE:
- Next.js themes integration with next-themes library for seamless theme switching
- Context-based theme management with TypeScript support
- Theme persistence across browser sessions and user accounts
- System theme detection with automatic switching based on OS preferences
- Theme loading optimization to prevent flash of unstyled content
- Server-side rendering compatibility with proper hydration handling

COMPREHENSIVE THEME VARIANTS:
- Light Theme: Clean, professional appearance for daytime operations
- Dark Theme: Reduced eye strain for 24/7 logistics operations
- High Contrast Theme: Enhanced accessibility for visually impaired users
- Company Branded Themes: Custom color schemes matching client branding
- Seasonal Themes: Optional holiday or seasonal variations
- Industry-specific Themes: Color schemes optimized for different logistics sectors

THEME CUSTOMIZATION SYSTEM:
- CSS Custom Properties (variables) for dynamic theme switching
- Color palette generator with automatic contrast calculation
- Typography scale customization with web-safe font fallbacks
- Spacing and sizing system that scales across themes
- Border radius and shadow customization for different design aesthetics
- Icon theme variants with consistent visual weight
- Chart and visualization color schemes that adapt to theme changes

ENTERPRISE BRANDING FEATURES:
- Logo upload and management with automatic sizing and optimization
- Custom color picker with brand color validation
- Font selection from Google Fonts library or custom font uploads
- Favicon and app icon customization for branded experience
- Email template customization matching theme and branding
- Printed document styling (labels, invoices) with brand consistency
- White-label options for reseller and partner implementations

THEME MANAGEMENT INTERFACE:
- Admin panel for theme configuration and management
- Real-time theme preview with instant visual feedback
- Theme export/import functionality for backup and sharing
- Theme version control with rollback capabilities
- A/B testing support for theme effectiveness
- User preference analytics for theme adoption rates
- Bulk theme deployment for enterprise accounts

PERFORMANCE CONSIDERATIONS:
- Lazy loading of theme assets to minimize initial bundle size
- Theme caching strategies for faster switching
- CSS-in-JS optimization for dynamic theme properties
- Theme asset compression and optimization
- Critical theme CSS inlining for faster initial render
- Theme preloading based on user preferences and patterns

RESPONSIVE THEME BEHAVIOR:
- Theme-aware responsive breakpoints and component behavior
- Mobile-optimized theme variants with touch-friendly elements
- Print-specific theme styling for documents and reports
- Theme adaptation for different screen sizes and pixel densities
- Dark theme optimization for OLED displays and battery life


## 18. AI Memory Management & Feedback System


Create an intelligent memory management system for the AI chatbot with sophisticated feedback processing and learning capabilities:

MEMORY ARCHITECTURE:
- Conversation context retention across multiple sessions
- User preference learning and personalization over time
- Entity extraction and relationship mapping for logistics operations
- Historical interaction analysis for improved response accuracy
- Multi-tenant memory isolation for enterprise security
- Memory garbage collection and optimization for performance

UPSTASH INTEGRATION:
- Redis-based memory storage with Upstash for scalable persistence
- Conversation threading with unique identifiers and context preservation
- Vector embeddings for semantic similarity and context matching
- Memory expiration policies based on conversation importance and age
- Cross-session memory synchronization for multi-device usage
- Memory backup and recovery mechanisms for data protection

FEEDBACK PROCESSING SYSTEM:
- User feedback collection with thumbs up/down rating system
- Detailed feedback forms for specific response improvement
- Response quality scoring based on user engagement and satisfaction
- Automatic feedback analysis using natural language processing
- Feedback aggregation and pattern recognition for system improvements
- Response optimization based on user feedback and success metrics

LEARNING & ADAPTATION:
- Machine learning model training from user interactions and feedback
- Response template optimization based on successful conversation patterns
- Personalized response generation based on user role and preferences
- Industry-specific knowledge adaptation for different logistics domains
- Continuous learning pipeline with automated model updates
- A/B testing framework for response effectiveness evaluation

CONTEXT MANAGEMENT:
- Real-time context awareness of current user activity and page content
- Shipment data integration for context-aware tracking assistance
- User role-based context adaptation (customer, driver, admin responses)
- Conversation topic tracking and intelligent topic switching
- Context preservation during conversation interruptions and resumptions
- Multi-modal context integration (text, voice, document analysis)



## 19. Comprehensive Documentation System


Create detailed technical documentation and architectural guides for the Shipsy platform that serve as reference for developers and stakeholders:

FEEDBACK BOT ARCHITECTURE DOCUMENTATION:
- System overview with component interaction diagrams
- API documentation with request/response examples and error codes
- Database schema documentation with relationship mappings
- Memory management workflows with data flow diagrams
- Integration patterns with external services and APIs
- Deployment procedures and environment configuration guides
- Troubleshooting guides with common issues and solutions
- Performance optimization recommendations and best practices

TECHNICAL ARCHITECTURE GUIDES:
- Frontend architecture overview with component hierarchy
- State management patterns and data flow documentation
- Authentication and authorization system documentation
- API design principles and RESTful endpoint documentation
- Database design with ERD diagrams and optimization strategies
- Security implementation guide with threat modeling
- Testing strategies with unit, integration, and E2E test examples
- CI/CD pipeline documentation with deployment workflows

DEVELOPER ONBOARDING DOCUMENTATION:
- Development environment setup with step-by-step instructions
- Code style guides and contribution guidelines
- Component library usage documentation with examples
- Git workflow and branching strategy documentation
- Code review process and quality standards
- Debug procedures and development tools usage
- Performance monitoring and optimization techniques
- Third-party service integration guides

USER MANUALS & GUIDES:
- Admin user manual with feature descriptions and usage instructions
- Customer portal guide with self-service capabilities
- Driver mobile app documentation with workflow procedures
- API integration guide for third-party developers
- Troubleshooting guide for common user issues
- Feature release notes and update documentation
- Training materials with video tutorials and step-by-step guides
- FAQ section with searchable knowledge base
```


*Implementation Notes:*
- Each prompt builds upon previous functionality and should be implemented sequentially
- Ensure proper TypeScript integration throughout all components
- Maintain consistent design system and accessibility standards
- Implement comprehensive error handling and loading states
- Follow Next.js best practices for performance and SEO
- Include proper testing strategies for all new features
- Document all APIs and component interfaces thoroughly
- Ensure mobile responsiveness across all implementations