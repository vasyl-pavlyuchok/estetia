# Blueprint for Estetia Website Redesign

## Overview
This blueprint outlines the redesign of the Estetia website, transforming it into a modern, aesthetically pleasing, and highly functional simulated aesthetic clinic platform. The primary goal is to showcase our AI interaction capabilities through WhatsApp, providing a seamless and engaging user experience. The design will draw inspiration from a reference clinic website, adapting its structure and treatments while implementing a unique, sophisticated visual identity with a focus on modern colors, liquid glass effects, and compelling imagery.

## Project Details

### Current Features & Structure
*   **Navigation Bar:** Fixed, responsive navigation with brand logo and key sections (La Clínica, Tratamientos, Dra. Elena R., Cita Previa). Includes a scroll-triggered transparent to opaque transition.
*   **Hero Section:** Large background image, prominent headline, call-to-action for "Diagnóstico IA Gratuito," patient testimonials, and a "Protocolo Estetia®" glass card.
*   **Treatments Section:** Grid of three service cards (Facial, Corporal, Capilar) with images, titles, descriptions, and a call-to-action.
*   **Doctor/About Us Section:** Features Dr. Elena R., her quote, experience, patient count, and a call-to-action.
*   **Footer:** Standard footer with brand name, description, social links, treatment categories, legal links, and a direct WhatsApp button.
*   **WhatsApp Widget:** Floating widget for direct communication.
*   **Styling:** Utilizes Tailwind CSS with a custom color palette (`estetia-primary`, `estetia-text`, `estetia-bg`, `estetia-whatsapp`). Implements a "liquid glass" effect for certain UI elements.
*   **Technology:** React, Vite, Tailwind CSS, Lucide-React icons.

### Aesthetic & Design Principles
*   **Inspiration:** Inspired by `https://clinicamedicoesteticageno.es/`, focusing on its clean layout, professional imagery, and clear presentation of services.
*   **Color Palette:** Modern, soft, and elegant tones suitable for an aesthetic clinic. The `tailwind.config.js` has been updated to include `Soft Lavender (#B8A9C6)`, `Light Blue-Grey (#DCE0E6)`, `Muted Purple (#8F7D9E)`, `Dark Charcoal (#343A40)`, and `Very Light Grey (#F8F9FA)`. The WhatsApp green remains consistent.
*   **Typography:** Elegant and readable fonts with clear hierarchy (already using `Inter`).
*   **Liquid Glass Effect:** Applied to buttons, cards, and potentially navigation for a modern, innovative touch, reflecting Apple's liquid glass design where appropriate.
*   **Imagery:** High-quality, royalty-free images (from Unsplash) that are relevant to aesthetic treatments, conveying professionalism, elegance, and natural results. Avoids copyrighted or overused stock photos.
*   **Responsiveness:** Ensures optimal viewing and interaction across all device sizes (mobile, tablet, desktop).
*   **Accessibility (A11Y):** Designed with accessibility standards in mind, ensuring contrast, proper semantic HTML, and intuitive navigation.

### AI Integration (Simulated)
*   The website itself will not feature direct AI interaction. All AI interactions will be channeled through WhatsApp, where our AI solution will be implemented.
*   The website will emphasize a secure platform and personalized care, highlighting the efficiency of WhatsApp-based consultations.

## Current Plan: Enriching the Homepage

To enhance the user experience and provide more value, we will be adding three new sections to the homepage, inspired by `https://clinicamedicoesteticageno.es/`.

### Steps:
1.  **Create `src/components/WhyChooseUs.jsx`:** This component will be placed after the Hero section and will highlight the key differentiators of the clinic, such as "Tecnología de Vanguardia", "Resultados Naturales", and "Diagnóstico Personalizado".
2.  **Create `src/components/Blog.jsx`:** This component will showcase the latest blog articles, positioning the clinic as an authority in the field and improving SEO.
3.  **Integrate Google Maps in `src/components/Footer.jsx`:** A map will be embedded in the footer to provide a clear location of the clinic, enhancing user trust and convenience.
4.  **Update `src/App.jsx`:** Import and render the new components in the appropriate order.
5.  **Review and Refine:** Ensure all new sections are visually consistent with the existing design and are fully responsive.
