// DOM元素加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 页面加载动画
    const loader = document.querySelector('.loader');
    
    if (loader) {
        setTimeout(function() {
            loader.classList.add('fade-out');
        }, 1000);
    }
    
    // 导航栏滚动效果
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = '#fff';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 轮播图功能
    const slides = [
        {
            title: '专业电力铁塔制造商',
            description: '20年专注电力铁塔设计与制造，品质铸就未来',
            image: 'images/banner1.jpg'
        },
        {
            title: '国家电网指定供应商',
            description: '为国内外重点电力工程提供高品质钢结构产品',
            image: 'images/banner2.jpg'
        },
        {
            title: '高品质钢结构解决方案',
            description: '从设计、制造到安装，提供一站式服务',
            image: 'images/banner3.jpg'
        }
    ];
    
    const slider = document.querySelector('.slider');
    const sliderNav = document.querySelector('.slider-nav');
    
    // 创建轮播图内容
    if (slider && sliderNav) {
        // 清空现有内容
        slider.innerHTML = '';
        sliderNav.innerHTML = '';
        
        // 添加轮播图
        slides.forEach((slide, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
            
            slideElement.innerHTML = `
                <div class="content">
                    <h2>${slide.title}</h2>
                    <p>${slide.description}</p>
                    <a href="#contact" class="btn">联系我们</a>
                </div>
                <div class="image">
                    <img src="${slide.image}" alt="电力铁塔">
                </div>
            `;
            
            slider.appendChild(slideElement);
            
            // 添加导航点
            const navDot = document.createElement('span');
            navDot.className = index === 0 ? 'active' : '';
            navDot.addEventListener('click', () => {
                changeSlide(index);
            });
            
            sliderNav.appendChild(navDot);
        });
        
        // 自动轮播
        let currentSlide = 0;
        
        function changeSlide(index) {
            // 更新当前轮播索引
            currentSlide = index;
            
            // 更新轮播图显示
            document.querySelectorAll('.slide').forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add('active');
                } else {
                    slide.classList.remove('active');
                }
            });
            
            // 更新导航点
            document.querySelectorAll('.slider-nav span').forEach((dot, i) => {
                if (i === index) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // 自动切换轮播图
        setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            changeSlide(currentSlide);
        }, 5000);
    }
    
    // 产品筛选功能
    const categoryButtons = document.querySelectorAll('.category');
    const productCards = document.querySelectorAll('.product-card');
    
    if (categoryButtons.length > 0 && productCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // 移除所有按钮的active类
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
                // 添加当前按钮的active类
                button.classList.add('active');
                
                // 获取当前分类
                const category = button.getAttribute('data-category');
                
                // 筛选产品
                productCards.forEach(card => {
                    if (category === 'all' || card.getAttribute('data-category') === category) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // 滚动动画
    const animateElements = document.querySelectorAll('.about-content, .products-grid, .projects-grid, .advantages-grid, .contact-content');
    
    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('animate');
            }
        });
    }
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
    
    // 表单提交
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // 在实际项目中，这里应该添加表单验证和提交逻辑
            alert('感谢您的留言，我们将尽快与您联系！');
            this.reset();
        });
    }
}); 