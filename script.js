// ============================================
// JavaScript for EduLearn Education Website
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeButtons();
    initializeScrollEffects();
    initializeSearch();
});

// ============================================
// Navigation Functions
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#')) {
                e.preventDefault();
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Close mobile menu when a link is clicked
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: false
                });
                bsCollapse.hide();
            });
        });
    }
}

// ============================================
// Button Functions
// ============================================

function initializeButtons() {
    const enrollButtons = document.querySelectorAll('.course-card .btn-primary');
    const ctaButton = document.querySelector('.cta-section .btn-light');
    
    enrollButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            showEnrollmentModal();
        });
    });
    
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            showEnrollmentModal();
        });
    }
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// Scroll Effects
// ============================================

function initializeScrollEffects() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                animateCounters(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.feature-card, .course-card, .testimonial-card').forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// Enrollment Modal
// ============================================

function showEnrollmentModal() {
    const modalHtml = `
        <div class="modal fade" id="enrollmentModal" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header border-0">
                        <h5 class="modal-title fw-bold">Enroll in Course</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <form id="enrollmentForm">
                            <div class="mb-3">
                                <label for="fullName" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="fullName" placeholder="John Doe" required>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email Address</label>
                                <input type="email" class="form-control" id="email" placeholder="john@example.com" required>
                            </div>
                            <div class="mb-3">
                                <label for="experience" class="form-label">Experience Level</label>
                                <select class="form-select" id="experience" required>
                                    <option value="">Select your level</option>
                                    <option value="beginner">Beginner</option>
                                    <option value="intermediate">Intermediate</option>
                                    <option value="advanced">Advanced</option>
                                </select>
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="agreeTerms" required>
                                <label class="form-check-label" for="agreeTerms">
                                    I agree to the terms and conditions
                                </label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer border-0">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" onclick="submitEnrollment()">Complete Enrollment</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    let modal = document.getElementById('enrollmentModal');
    if (!modal) {
        const div = document.createElement('div');
        div.innerHTML = modalHtml;
        document.body.appendChild(div.firstElementChild);
        modal = document.getElementById('enrollmentModal');
    }
    
    const bsModal = new bootstrap.Modal(modal);
    bsModal.show();
}

function submitEnrollment() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const experience = document.getElementById('experience').value;
    const agreeTerms = document.getElementById('agreeTerms').checked;
    
    if (!fullName || !email || !experience || !agreeTerms) {
        alert('Please fill in all fields and agree to the terms');
        return;
    }
    
    alert(`Thank you for enrolling, ${fullName}! We've sent a confirmation email to ${email}. Welcome to EduLearn!`);
    
    const modal = bootstrap.Modal.getInstance(document.getElementById('enrollmentModal'));
    modal.hide();
    
    document.getElementById('enrollmentForm').reset();
}

// ============================================
// Search & Filter Functionality
// ============================================

function initializeSearch() {
    const searchContainer = createSearchContainer();
    
    if (searchContainer) {
        const coursesSection = document.getElementById('courses');
        if (coursesSection) {
            coursesSection.parentNode.insertBefore(searchContainer, coursesSection);
        }
    }
}

function createSearchContainer() {
    const container = document.createElement('div');
    container.className = 'container my-4';
    container.innerHTML = `
        <div class="row mb-4">
            <div class="col-lg-8 mx-auto">
                <div class="input-group input-group-lg">
                    <span class="input-group-text bg-white border-end-0">
                        <i class="bi bi-search text-muted"></i>
                    </span>
                    <input type="text" class="form-control border-start-0" 
                           id="courseSearch" placeholder="Search courses...">
                </div>
                <div class="mt-3 d-flex gap-2 flex-wrap" id="filterTags">
                    <button class="btn btn-sm btn-outline-primary filter-tag" data-filter="all">All</button>
                    <button class="btn btn-sm btn-outline-primary filter-tag" data-filter="Popular">Popular</button>
                    <button class="btn btn-sm btn-outline-primary filter-tag" data-filter="New">New</button>
                    <button class="btn btn-sm btn-outline-primary filter-tag" data-filter="Trending">Trending</button>
                    <button class="btn btn-sm btn-outline-primary filter-tag" data-filter="Featured">Featured</button>
                </div>
            </div>
        </div>
    `;
    
    return container;
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const searchInput = document.getElementById('courseSearch');
        const filterTags = document.querySelectorAll('.filter-tag');
        
        if (searchInput) {
            searchInput.addEventListener('input', function() {
                filterCourses(this.value.toLowerCase());
            });
        }
        
        if (filterTags.length) {
            filterTags.forEach(tag => {
                tag.addEventListener('click', function() {
                    filterTags.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    filterCoursesByTag(this.dataset.filter);
                });
            });
        }
    }, 100);
});

function filterCourses(searchTerm) {
    const courses = document.querySelectorAll('.course-card');
    
    courses.forEach(course => {
        const title = course.querySelector('.card-title').textContent.toLowerCase();
        const description = course.querySelector('.card-text').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            course.style.display = 'block';
            course.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            course.style.display = 'none';
        }
    });
}

function filterCoursesByTag(tag) {
    const courses = document.querySelectorAll('.course-card');
    
    courses.forEach(course => {
        const badges = course.querySelectorAll('.badge');
        let hasTag = false;
        
        if (tag === 'all') {
            hasTag = true;
        } else {
            badges.forEach(badge => {
                if (badge.textContent.includes(tag)) {
                    hasTag = true;
                }
            });
        }
        
        if (hasTag) {
            course.style.display = 'block';
            course.style.animation = 'fadeIn 0.3s ease-in';
        } else {
            course.style.display = 'none';
        }
    });
}

// ============================================
// Counter Animation
// ============================================

function animateCounters(element) {
    const counters = element.querySelectorAll('[data-target]');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// ============================================
// Smooth Scroll Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// Active Nav Link on Scroll
// ============================================

window.addEventListener('scroll', () => {
    let currentSection = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 200) {
            currentSection = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href').substring(1);
        if (href === currentSection) {
            link.classList.add('active');
        }
    });
});

// ============================================
// Performance: Lazy Loading Images
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Mobile Menu Toggle
// ============================================

const navbarToggler = document.querySelector('.navbar-toggler');
if (navbarToggler) {
    navbarToggler.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
    });
}

// ============================================
// Back to Top Button
// ============================================

function createBackToTopButton() {
    const button = document.createElement('button');
    button.id = 'backToTop';
    button.className = 'btn btn-primary btn-lg';
    button.innerHTML = '<i class="bi bi-chevron-up"></i>';
    button.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        display: none;
        z-index: 1000;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        padding: 0;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            button.style.display = 'flex';
            button.style.alignItems = 'center';
            button.style.justifyContent = 'center';
        } else {
            button.style.display = 'none';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', createBackToTopButton);

// ============================================
// Form Validation
// ============================================

function validateForm(formId) {
    const form = document.getElementById(formId);
    if (form) {
        form.addEventListener('submit', function(e) {
            if (!this.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            this.classList.add('was-validated');
        });
    }
}

// ============================================
// Console Logging (Development)
// ============================================

console.log('%c EduLearn - Education Website', 'color: #0d6efd; font-size: 20px; font-weight: bold;');
console.log('%c Welcome to EduLearn! Transform your learning journey today.', 'color: #0d6efd; font-size: 14px;');
