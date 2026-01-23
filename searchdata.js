// Search data for the entire website
const searchData = [
    // ============ PRODUCTS ============
    {
        type: 'product',
        title: 'Semaglutide 10mg',
        description: 'Premium research peptide for laboratory use only. High-quality research peptide tested for purity and consistency.',
        keywords: ['semaglutide', 'glp-1', 'peptide', 'weight loss', 'research', 'laboratory'],
        url: 'product-details.html?id=semaglutide-10mg',
        image: './assets/Semaglutide.jpg',
        price: '$85.00'
    },
    {
        type: 'product',
        title: 'GLP-3 RT 10mg',
        description: 'Advanced GLP-3 research peptide for scientific study. Cutting-edge research peptide formulated for laboratory applications.',
        keywords: ['glp-3', 'glp3', 'rt', 'peptide', 'research', 'scientific'],
        url: 'product-details.html?id=glp3-rt-10mg',
        image: './assets/GLP-3 RT.jpg',
        price: '$80.00'
    },
    {
        type: 'product',
        title: 'GLP-2 TZ 10mg',
        description: 'GLP-2 TZ research peptide for advanced studies. Specialized research compound designed for scientific investigation.',
        keywords: ['glp-2', 'glp2', 'tz', 'peptide', 'research', 'advanced'],
        url: 'product-details.html?id=glp2-tz-10mg',
        image: './assets/GLP-2 TZ.jpg',
        price: '$78.00'
    },
    {
        type: 'product',
        title: 'Bacteriostatic Water 10mL',
        description: 'Sterile water for reconstitution of research peptides. Essential for reconstituting lyophilized peptides.',
        keywords: ['bacteriostatic', 'water', 'sterile', 'reconstitution', 'bac water'],
        url: 'product-details.html?id=bacteriostatic-water-10ml',
        image: './assets/Bacteriostatic Water.jpg',
        price: '$12.50'
    },
    {
        type: 'product',
        title: 'GLP-2 TZ (Tirzepatide) 10mg',
        description: 'Tirzepatide research peptide for advanced research. Premium research peptide for scientific study.',
        keywords: ['tirzepatide', 'glp-2', 'tz', 'peptide', 'research', 'weight loss'],
        url: 'product-details.html?id=glp2-tz-tirzepatide-10mg',
        image: './assets/GLP-2 TZ tirzepatide.jpg',
        price: '$105.00'
    },
    {
        type: 'product',
        title: 'MOTS-c 10mg',
        description: 'MOTS-c mitochondrial peptide for research applications. Specialized mitochondrial peptide designed for scientific research.',
        keywords: ['mots-c', 'motsc', 'mitochondrial', 'peptide', 'research', 'metabolism'],
        url: 'product-details.html?id=mots-c-10mg',
        image: './assets/MOTS-c.jpg',
        price: '$60.00'
    },
    {
        type: 'product',
        title: 'TB-500 5mg',
        description: 'TB-500 research peptide for scientific study. High-quality research peptide tested for purity.',
        keywords: ['tb-500', 'tb500', 'thymosin', 'peptide', 'research', 'recovery'],
        url: 'product-details.html?id=tb500-5mg',
        image: './assets/TB-500.jpg',
        price: '$48.00'
    },
    {
        type: 'product',
        title: 'SELANK 5mg',
        description: 'SELANK peptide for advanced research purposes. Research-grade peptide for scientific investigation.',
        keywords: ['selank', 'peptide', 'research', 'nootropic', 'anxiety'],
        url: 'product-details.html?id=selank-5mg',
        image: './assets/SELANK.jpg',
        price: '$45.00'
    },
    {
        type: 'product',
        title: 'CJC-1295 (no DAC) + Ipamorelin 5mg',
        description: 'Combined peptide blend for advanced research applications. Powerful blend for scientific study.',
        keywords: ['cjc-1295', 'cjc1295', 'ipamorelin', 'peptide', 'blend', 'growth hormone', 'ghrp'],
        url: 'product-details.html?id=cjc1295-ipamorelin-5mg',
        image: './assets/CJC-1295.jpg',
        price: '$78.00'
    },
    {
        type: 'product',
        title: 'GLP-1 SM 10mg',
        description: 'GLP-1 SM research peptide for laboratory use. Premium research peptide designed for scientific applications.',
        keywords: ['glp-1', 'glp1', 'sm', 'peptide', 'research', 'weight loss'],
        url: 'product-details.html?id=glp1-sm-10mg',
        image: './assets/GLP-1.jpg',
        price: '$82.00'
    },
    {
        type: 'product',
        title: 'Melanotan II 10mg',
        description: 'Melanotan II peptide for research purposes. Research-grade peptide for scientific study.',
        keywords: ['melanotan', 'mt2', 'melanin', 'peptide', 'tanning', 'research'],
        url: 'product-details.html?id=melanotan-2-10mg',
        image: './assets/MELANOTAN II.jpg',
        price: '$55.00'
    },
    {
        type: 'product',
        title: 'SEMAX 5mg',
        description: 'SEMAX peptide for advanced research. Specialized research peptide designed for scientific investigation.',
        keywords: ['semax', 'peptide', 'nootropic', 'research', 'cognitive'],
        url: 'product-details.html?id=semax-5mg',
        image: './assets/SEMAX.jpg',
        price: '$43.00'
    },
    {
        type: 'product',
        title: 'BPC-157 5mg',
        description: 'BPC-157 research peptide for scientific study. Widely-studied research peptide for laboratory applications.',
        keywords: ['bpc-157', 'bpc157', 'peptide', 'healing', 'recovery', 'research'],
        url: 'product-details.html?id=bpc157-5mg',
        image: './assets/BPC-157.jpg',
        price: '$39.00'
    },

    // ============ WEBSITE PAGES ============
    {
        type: 'page',
        title: 'Home - Westbridge Research',
        description: 'Premium research-grade peptides trusted by scientists worldwide. Free shipping on orders over $200.',
        keywords: ['home', 'homepage', 'westbridge', 'research', 'peptides', 'main page'],
        url: 'index.html'
    },
    {
        type: 'page',
        title: 'About Us',
        description: 'Learn about Westbridge Research and our commitment to providing outstanding quality research-grade peptides at competitive rates.',
        keywords: ['about', 'about us', 'company', 'westbridge', 'research', 'who we are'],
        url: 'aboutus.html'
    },
    {
        type: 'page',
        title: 'Shop All Products',
        description: 'Browse our complete collection of premium research peptides. All compounds undergo purity testing.',
        keywords: ['shop', 'products', 'buy', 'purchase', 'peptides', 'catalog'],
        url: 'shop.html'
    },
    {
        type: 'page',
        title: 'COAs and Test Results',
        description: 'View our certificates of analysis and third-party test results. All compounds are tested for purity and quality.',
        keywords: ['coa', 'certificate', 'analysis', 'test', 'results', 'quality', 'purity', 'third party'],
        url: 'coas.html'
    },
    {
        type: 'page',
        title: 'FAQ - Frequently Asked Questions',
        description: 'Find answers to common questions about our products, shipping, orders, and research peptides.',
        keywords: ['faq', 'questions', 'answers', 'help', 'support', 'frequently asked'],
        url: 'faq.html'
    },
    {
        type: 'page',
        title: 'Contact Us',
        description: 'Get in touch with Westbridge Research. Contact us for questions about orders or products.',
        keywords: ['contact', 'contact us', 'email', 'support', 'help', 'message'],
        url: 'contactus.html'
    },

    // ============ LEGAL PAGES ============
    {
        type: 'page',
        title: 'Track Your Order',
        description: 'Track your order status and shipping information. Enter your order number to see delivery updates.',
        keywords: ['track', 'order', 'tracking', 'shipping', 'delivery', 'where is my order'],
        url: './Legal/trackorder.html'
    },
    {
        type: 'page',
        title: 'Refund & Return Policy',
        description: 'Learn about our refund and return policy for research peptides.',
        keywords: ['refund', 'return', 'policy', 'money back', 'exchange'],
        url: './Legal/refund.html'
    },
    {
        type: 'page',
        title: 'Shipping Policy',
        description: 'Information about our shipping methods, times, and free shipping on orders over $200.',
        keywords: ['shipping', 'delivery', 'free shipping', 'policy', 'shipping time'],
        url: './Legal/shipping.html'
    },
    {
        type: 'page',
        title: 'Privacy Policy',
        description: 'Read our privacy policy to understand how we protect your personal information.',
        keywords: ['privacy', 'policy', 'data', 'protection', 'security', 'personal information'],
        url: './Legal/privacy.html'
    },
    {
        type: 'page',
        title: 'Terms & Conditions',
        description: 'Read our terms and conditions for using Westbridge Research products and services.',
        keywords: ['terms', 'conditions', 'legal', 'agreement', 'terms of service'],
        url: './Legal/terms.html'
    },

    // ============ IMPORTANT INFORMATION ============
    {
        type: 'info',
        title: 'Free Shipping on Orders Over $200',
        description: 'Get free shipping on all orders over $200. Save on shipping costs for larger orders.',
        keywords: ['free shipping', 'shipping', 'discount', 'save', '$200', 'promotion'],
        url: 'shop.html'
    },
    {
        type: 'info',
        title: 'Research Use Only',
        description: 'All products are for laboratory developmental research use only. Not intended for human consumption.',
        keywords: ['research', 'laboratory', 'not for human use', 'disclaimer', 'fda'],
        url: 'index.html'
    },
    {
        type: 'info',
        title: 'Third-Party Tested Peptides',
        description: 'All compounds undergo purity testing and third-party verification to meet the highest standards.',
        keywords: ['third party', 'tested', 'quality', 'purity', 'certificate', 'coa'],
        url: 'coas.html'
    },
    {
        type: 'info',
        title: 'Purity Testing & Quality Assurance',
        description: 'All compounds are tested for purity >99% and consistency to meet the highest laboratory standards.',
        keywords: ['purity', 'quality', 'testing', 'assurance', '99%', 'standards'],
        url: 'coas.html'
    }
];

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = searchData;
}