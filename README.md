                                                                                                  # Home Service Web App

## 📋 Table of Contents
- 🤖 [Introduction](#introduction)
- ⚙️ [Tech Stack](#tech-stack)
- 🔋 [Features](#features)
- 🤸 [Quick Start](#quick-start)
- 🕸️ [Snippets](#snippets)
- 🔗 [Links](#links)
- 🚀 [More](#more)

## 🤖 Introduction
Developed with Next.js and leveraging its server-side rendering capabilities, the Home Service website presents various services, showcasing comprehensive information in a well-designed format. It includes advanced filtering and pagination support to enhance the user experience.

## ⚙️ Tech Stack
- **Next.js**
- **Shadcn/ui**
- **Tailwind CSS**
- **Hygraph**
- **Descope**

## 🔋 Features
- **Home Page:** A visually appealing display of services, providing a captivating introduction to the diverse range of services available.
- **Exploration and Filtering:** Search and filter services based on various criteria, such as service types.
- **Server-Side Rendering:** Enhances performance and provides a smoother browsing experience.
- **Pagination:** Navigate through large datasets effortlessly with multiple pages.
- **Metadata Optimization and SEO:** Improves visibility on search engine results pages for service listings.
- **Responsive Design:** Ensures an optimal user experience across various devices.
- **Code Architecture and Reusability:** Built for scalability and maintenance.

## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
```bash
git clone https://github.com/sumon0002001/home_service_app.git
cd home_service_app
```

### Installation
Install the project dependencies:
```bash
npm install
```

### Set Up Environment Variables
1. Create a new file named `.env` in the root of your project.
2. Add the following content:
   ```env
   NEXT_PUBLIC_MASTER_URL_KEY=""
   ```
   Replace the placeholder value with your actual credentials. Obtain these credentials by signing up on the corresponding Hygraph platform.

### Running the Project
Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🕸️ Snippets
- **`constants.ts`**: Stores global constants used across the application.
- **`globals.css`**: Contains global styles for the project.
- **`tailwind.config.js`**: Configures Tailwind CSS for custom theming and styling.



## 🚀 More
Explore additional resources and guides in the documentation folder or reach out to the development team for support.
