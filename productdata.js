// All product data in one place
const productsData = {
    'semaglutide-10mg': {
        id: 'semaglutide-10mg',
        name: 'Semaglutide 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$95.00',
        priceCurrent: '$85.00',
        points: 'Purchase & earn 85 points',
        image: './assets/Semaglutide.jpg',
        images: ['./assets/Semaglutide.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'Premium research peptide for laboratory use only.',
        fullDescription: 'Semaglutide 10mg is a high-quality research peptide designed for scientific and laboratory research purposes. This product is tested for purity and consistency to meet the highest standards.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Storage: Store in freezer',
            'Research use only'
        ]
    },
    'glp3-rt-10mg': {
        id: 'glp3-rt-10mg',
        name: 'GLP-3 RT 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$90.00',
        priceCurrent: '$80.00',
        points: 'Purchase & earn 80 points',
        image: './assets/GLP-3 RT.jpg',
        images: ['./assets/GLP-3 RT.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'Advanced GLP-3 research peptide for scientific study.',
        fullDescription: 'GLP-3 RT 10mg is a cutting-edge research peptide formulated for laboratory applications. Third-party tested for quality and purity.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Third-party tested',
            'Research use only'
        ]
    },
    'glp2-tz-10mg': {
        id: 'glp2-tz-10mg',
        name: 'GLP-2 TZ 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$88.00',
        priceCurrent: '$78.00',
        points: 'Purchase & earn 78 points',
        image: './assets/GLP-2 TZ.jpg',
        images: ['./assets/GLP-2 TZ.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'GLP-2 TZ research peptide for advanced studies.',
        fullDescription: 'GLP-2 TZ 10mg is a specialized research compound designed for scientific investigation. Tested for purity and consistency.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Laboratory grade',
            'Research use only'
        ]
    },
    'bacteriostatic-water-10ml': {
        id: 'bacteriostatic-water-10ml',
        name: 'Bacteriostatic Water 10mL',
        category: 'Westbridgeresearch',
        priceOriginal: null,
        priceCurrent: '$12.50',
        priceRange: '$12.50 – $28.50',
        points: 'Purchase & earn 13 points',
        image: './assets/Bacteriostatic Water.jpg',
        images: ['./assets/Bacteriostatic Water.jpg'],
        inStock: true,
        description: 'Sterile water for reconstitution of research peptides.',
        fullDescription: 'Bacteriostatic Water is essential for reconstituting lyophilized peptides. Sterile and safe for research use, available in multiple sizes.',
        specifications: [
            'Volume: 10mL',
            'Sterile and bacteriostatic',
            'For reconstitution use',
            'Multiple size options available',
            'Research use only'
        ]
    },
    'glp2-tz-tirzepatide-10mg': {
        id: 'glp2-tz-tirzepatide-10mg',
        name: 'GLP-2 TZ (Tirzepatide) 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$120.00',
        priceCurrent: '$105.00',
        points: 'Purchase & earn 105 points',
        image: './assets/GLP-2 TZ tirzepatide.jpg',
        images: ['./assets/GLP-2 TZ tirzepatide.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'Tirzepatide research peptide for advanced research.',
        fullDescription: 'GLP-2 TZ (Tirzepatide) 10mg is a premium research peptide for scientific study. Third-party tested for quality assurance.',
        specifications: [
            'Amount: 10mg',
            'Active: Tirzepatide',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Research use only'
        ]
    },
    'mots-c-10mg': {
        id: 'mots-c-10mg',
        name: 'MOTS-c 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$70.00',
        priceCurrent: '$60.00',
        points: 'Purchase & earn 60 points',
        image: './assets/MOTS-c.jpg',
        images: ['./assets/MOTS-c.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'MOTS-c mitochondrial peptide for research applications.',
        fullDescription: 'MOTS-c 10mg is a specialized mitochondrial peptide designed for scientific research. Tested for purity and quality.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Laboratory grade',
            'Research use only'
        ]
    },
    'tb500-5mg': {
        id: 'tb500-5mg',
        name: 'TB-500 5mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$55.00',
        priceCurrent: '$48.00',
        points: 'Purchase & earn 48 points',
        image: './assets/TB-500.jpg',
        images: ['./assets/TB-500.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'TB-500 research peptide for scientific study.',
        fullDescription: 'TB-500 5mg is a high-quality research peptide tested for purity. Ideal for laboratory applications and scientific research.',
        specifications: [
            'Amount: 5mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Third-party tested',
            'Research use only'
        ]
    },
    'selank-5mg': {
        id: 'selank-5mg',
        name: 'SELANK 5mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$52.00',
        priceCurrent: '$45.00',
        points: 'Purchase & earn 45 points',
        image: './assets/SELANK.jpg',
        images: ['./assets/SELANK.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'SELANK peptide for advanced research purposes.',
        fullDescription: 'SELANK 5mg is a research-grade peptide for scientific investigation. Tested for purity and consistency.',
        specifications: [
            'Amount: 5mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Laboratory grade',
            'Research use only'
        ]
    },
    'cjc1295-ipamorelin-5mg': {
        id: 'cjc1295-ipamorelin-5mg',
        name: 'CJC-1295 (no DAC) + Ipamorelin 5mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$89.00',
        priceCurrent: '$78.00',
        points: 'Purchase & earn 78 points',
        image: './assets/CJC-1295.jpg',
        images: ['./assets/CJC-1295.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'Combined peptide blend for advanced research applications.',
        fullDescription: 'CJC-1295 (no DAC) + Ipamorelin 5mg offers researchers a powerful blend for scientific study. Each component is carefully measured and tested for purity.',
        specifications: [
            'CJC-1295 (no DAC): 5mg',
            'Ipamorelin: 5mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Research use only'
        ]
    },
    'glp1-sm-10mg': {
        id: 'glp1-sm-10mg',
        name: 'GLP-1 SM 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$92.00',
        priceCurrent: '$82.00',
        points: 'Purchase & earn 82 points',
        image: './assets/GLP-1.jpg',
        images: ['./assets/GLP-1.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'GLP-1 SM research peptide for laboratory use.',
        fullDescription: 'GLP-1 SM 10mg is a premium research peptide designed for scientific applications. Third-party tested for quality.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Third-party tested',
            'Research use only'
        ]
    },
    'melanotan-2-10mg': {
        id: 'melanotan-2-10mg',
        name: 'Melanotan II 10mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$65.00',
        priceCurrent: '$55.00',
        points: 'Purchase & earn 55 points',
        image: './assets/MELANOTAN II.jpg',
        images: ['./assets/MELANOTAN II.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'Melanotan II peptide for research purposes.',
        fullDescription: 'Melanotan II 10mg is a research-grade peptide for scientific study. Tested for purity and quality.',
        specifications: [
            'Amount: 10mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Laboratory grade',
            'Research use only'
        ]
    },
    'semax-5mg': {
        id: 'semax-5mg',
        name: 'SEMAX 5mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$50.00',
        priceCurrent: '$43.00',
        points: 'Purchase & earn 43 points',
        image: './assets/SEMAX.jpg',
        images: ['./assets/SEMAX.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'SEMAX peptide for advanced research.',
        fullDescription: 'SEMAX 5mg is a specialized research peptide designed for scientific investigation. Tested for purity.',
        specifications: [
            'Amount: 5mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Laboratory grade',
            'Research use only'
        ]
    },
    'bpc157-5mg': {
        id: 'bpc157-5mg',
        name: 'BPC-157 5mg',
        category: 'Westbridgeresearch',
        priceOriginal: '$45.00',
        priceCurrent: '$39.00',
        priceRange: '$39.00 – $64.00',
        points: 'Earn up to 64 points',
        image: './assets/BPC-157.jpg',
        images: ['./assets/BPC-157.jpg'],
        badge: 'Sale!',
        inStock: true,
        description: 'BPC-157 research peptide for scientific study.',
        fullDescription: 'BPC-157 5mg is a widely-studied research peptide for laboratory applications. Tested for purity and quality.',
        specifications: [
            'Amount: 5mg',
            'Purity: >99%',
            'Form: Lyophilized powder',
            'Multiple size options',
            'Research use only'
        ]
    }
};

// Helper function to get product by ID
function getProductById(id) {
    return productsData[id] || null;
}

// Helper function to get all products as array
function getAllProducts() {
    return Object.values(productsData);
}