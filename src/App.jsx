import { useState } from 'react';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  Settings as MachineIcon,
  Devices as DevicesIcon,
  Restaurant as FoodIcon,
  Inventory as ProductsIcon,
  Business as BuildingIcon,
  AutoAwesome as LogoIcon,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Email,
  Phone
} from '@mui/icons-material';
import { IconButton } from '@mui/material';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dream Vertex
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {['Home', 'Machines', 'Devices', 'Food', 'Products', 'Buildings', 'Logos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <IconButton
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {['Home', 'Machines', 'Devices', 'Food', 'Products', 'Buildings', 'Logos', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 rounded transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Transform Your Ideas into Stunning 3D Reality
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Expert 3D design and modeling for machines, devices, food, products, buildings, and logos
            </p>
            <button
              onClick={() => scrollToSection('machines')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Explore Our Work
            </button>
          </div>
        </div>
      </section>

      {/* Machines Section */}
      <ServiceSection
        id="machines"
        title="Machines"
        description="Industrial machinery and equipment brought to life with precision 3D modeling"
        icon={<MachineIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800', alt: 'Industrial Machine 1' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4', alt: 'Machine Animation' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800', alt: 'Industrial Machine 2' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800', alt: 'Industrial Machine 3' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800', alt: 'Industrial Machine 4' }
        ]}
        layoutType="asymmetric-3col"
      />

      {/* Devices Section */}
      <ServiceSection
        id="devices"
        title="Devices"
        description="Electronic devices and tech products rendered with stunning detail"
        icon={<DevicesIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800', alt: 'Electronic Device 1' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800', alt: 'Electronic Device 2' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/3585094/3585094-uhd_2560_1440_25fps.mp4', alt: 'Device Animation' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800', alt: 'Electronic Device 3' },
        ]}
        layoutType="grid-2col"
      />

      {/* Food Section */}
      <ServiceSection
        id="food"
        title="Food"
        description="Appetizing food presentations and culinary designs"
        icon={<FoodIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800', alt: 'Food Design 1' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/4253124/4253124-uhd_2560_1440_25fps.mp4', alt: 'Food Animation' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800', alt: 'Food Design 2' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800', alt: 'Food Design 3' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800', alt: 'Food Design 4' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=800', alt: 'Food Design 5' }
        ]}
        layoutType="masonry-3col"
      />

      {/* Products Section */}
      <ServiceSection
        id="products"
        title="Products"
        description="Consumer products and merchandise with photorealistic quality"
        icon={<ProductsIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800', alt: 'Product Design 1' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800', alt: 'Product Design 2' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/6774265/6774265-uhd_2560_1440_25fps.mp4', alt: 'Product Animation' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800', alt: 'Product Design 3' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800', alt: 'Product Design 4' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800', alt: 'Product Design 5' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800', alt: 'Product Design 6' }
        ]}
        layoutType="grid-4col"
      />

      {/* Buildings Section */}
      <ServiceSection
        id="buildings"
        title="Buildings"
        description="Architectural designs and structures visualized in immersive 3D"
        icon={<BuildingIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800', alt: 'Building Design 1' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_30fps.mp4', alt: 'Building Animation' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800', alt: 'Building Design 2' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800', alt: 'Building Design 3' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?w=800', alt: 'Building Design 4' }
        ]}
        layoutType="asymmetric-2col"
      />

      {/* Logos Section */}
      <ServiceSection
        id="logos"
        title="Logos"
        description="3D logo designs and brand elements that stand out"
        icon={<LogoIcon className="text-4xl" />}
        media={[
          { type: 'image', src: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800', alt: 'Logo Design 1' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800', alt: 'Logo Design 2' },
          { type: 'image', src: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800', alt: 'Logo Design 3' },
          { type: 'video', src: 'https://videos.pexels.com/video-files/5717528/5717528-uhd_2560_1440_25fps.mp4', alt: 'Logo Animation' },
        ]}
        layoutType="creative-overlap"
      />

      {/* Contact Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Dream Vertex
              </h3>
              <p className="text-gray-400">
                Transforming ideas into stunning 3D reality with precision and creativity.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <Email fontSize="small" />
                  <span>info@dreamvertex.com</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Phone fontSize="small" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <IconButton className="text-white hover:text-blue-400 transition-colors" aria-label="Visit our Facebook page">
                  <Facebook />
                </IconButton>
                <IconButton className="text-white hover:text-blue-400 transition-colors" aria-label="Visit our Twitter page">
                  <Twitter />
                </IconButton>
                <IconButton className="text-white hover:text-pink-400 transition-colors" aria-label="Visit our Instagram page">
                  <Instagram />
                </IconButton>
                <IconButton className="text-white hover:text-blue-400 transition-colors" aria-label="Visit our LinkedIn page">
                  <LinkedIn />
                </IconButton>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Dream Vertex. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Service Section Component
function ServiceSection({ id, title, description, icon, media, layoutType }) {
  return (
    <section id={id} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white mb-4">
            {icon}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>
        
        <MasonryGallery media={media} layoutType={layoutType} />
      </div>
    </section>
  );
}

// Masonry Gallery Component with different layouts
function MasonryGallery({ media, layoutType }) {
  const getLayoutClasses = () => {
    switch (layoutType) {
      case 'asymmetric-3col':
        return 'grid grid-cols-1 md:grid-cols-3 gap-4';
      case 'grid-2col':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      case 'masonry-3col':
        return 'grid grid-cols-1 md:grid-cols-3 gap-4';
      case 'grid-4col':
        return 'grid grid-cols-2 md:grid-cols-4 gap-4';
      case 'asymmetric-2col':
        return 'grid grid-cols-1 md:grid-cols-2 gap-4';
      case 'creative-overlap':
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-3 gap-4';
    }
  };

  const getItemClasses = (index) => {
    switch (layoutType) {
      case 'asymmetric-3col':
        if (index === 0) return 'md:col-span-2 md:row-span-2';
        return '';
      case 'grid-2col':
        if (index === 0) return 'md:row-span-2';
        return '';
      case 'masonry-3col':
        if (index === 1) return 'md:row-span-2';
        if (index === 4) return 'md:col-span-2';
        return '';
      case 'grid-4col':
        if (index === 0) return 'md:col-span-2 md:row-span-2';
        if (index === 5) return 'md:col-span-2';
        return '';
      case 'asymmetric-2col':
        if (index === 1) return 'md:col-span-1 md:row-span-2';
        if (index === 3) return 'md:col-span-2';
        return '';
      case 'creative-overlap':
        if (index === 0) return 'md:col-span-2';
        return '';
      default:
        return '';
    }
  };

  return (
    <div className={getLayoutClasses()}>
      {media.map((item, index) => (
        <MediaItem
          key={index}
          item={item}
          className={getItemClasses(index)}
        />
      ))}
    </div>
  );
}

// Media Item Component
function MediaItem({ item, className }) {
  const [isLoaded, setIsLoaded] = useState(false);

  if (item.type === 'video') {
    return (
      <div className={`relative overflow-hidden rounded-lg shadow-lg group ${className}`}>
        <video
          src={item.src}
          controls
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onLoadedData={() => setIsLoaded(true)}
          preload="metadata"
        />
        {!isLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg shadow-lg group ${className}`}>
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

export default App;
