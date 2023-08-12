

function HeaderNav() {
  return (
    <>
    <div className="header-main__wrapper">
           
           <a  aria-label="Logo" className="header-main__logo">
              <div className="_logo"><img className="gfg_logo_img" width="100%" src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="geeksforgeeks"/></div>
           </a>
           <div className="header-main__container">
              <span className="hamburger-menu"><span className="gfg-burger-1"></span><span className="gfg-burger-2"></span><span className="gfg-burger-3"></span></span>
              <ul className="header-main__list">
                 <li className="header-main__list-item" data-parent="false" aria-expanded="false" data-expandable="true">
                    <span>Courses</span><i className="gfg-icon gfg-icon_arrow-down gfg-icon_header"></i>
                    <ul className="mega-dropdown">
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/category/all?courseType=offline&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" className="remove-anchor__decoration" target="_self">classNameroom Program&nbsp;<span style={{background: 'linear-gradient(152.92deg, #FF7F38 0.01%, #FF4F40 93.95%)', borderRadius: '4px', fontSize: '12px', color: '#fff', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>New</span></a></li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="false" data-expandable="true">
                          <span>Summer Skill Up</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown" style={{top: '-3px !important;'}}>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Android App Development (Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Science (Live)</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="false" data-expandable="true">
                          <span>Data Structures and Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown" style={{top: '-2px !important'}}>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA for Interview Preparation</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/geeks-classNamees-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA Live for Working Professionals</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA Self-paced in C++/Java</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA Self-paced in Python</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA Self-paced in Javascript</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/c-Programming-basic-to-advanced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA Self-paced in C</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>For Working Professionals</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/geeks-classNamees-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Structure &amp; Algorithm classNamees (Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/system-design-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">System Design (Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/devops-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DevOps(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Structures &amp; Algorithms in JavaScript</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/category/all?courseType=live&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Explore More Live Courses</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Full Stack Development&nbsp;<span style={{background: 'linear-gradient(153.07deg, #3EC6EB -2.47%, #1BC99F 102.78%)', borderRadius: '4px', fontSize: '12px', color: '#1e212a', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>(Delhi/NCR)</span></a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA for Interview Preparation&nbsp;<span style={{background: 'linear-gradient(153.07deg, #3EC6EB -2.47%, #1BC99F 102.78%)', borderRadius: '4px', fontSize: '12px', color: '#1e212a', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>(Delhi/NCR)</span></a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>For Students</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Full Stack Development&nbsp;<span style={{background: 'linear-gradient(153.07deg, #3EC6EB -2.47%, #1BC99F 102.78%)', borderRadius: '4px', fontSize: '12px', color: '#1e212a', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>Internship Certificate</span></a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DSA for Interview Preparation&nbsp;<span style ={{background: 'linear-gradient(153.07deg, #3EC6EB -2.47%, #1BC99F 102.78%)', borderRadius: '4px', fontSize: '12px', color: '#1e212a', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>(Delhi/NCR)</span></a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/complete-interview-preparation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Interview Preparation Course</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Science (Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/gate-live-course/?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">GATE CS &amp; IT 2024</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Structures &amp; Algorithms in JavaScript</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Structure &amp; Algorithm-Self Paced(C++/JAVA)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Data Structures &amp; Algorithms in Python</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/category/all?courseType=online&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Explore More Self-Paced Courses</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Programming Languages</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/cpp-stl?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">C++ Programming - Beginner to Advanced</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/Java-Foundation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Java Programming - Beginner to Advanced</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/c-foundation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">C Programming - Beginner to Advanced</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Web Development</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Full Stack Development&nbsp;<span style={{background: 'linear-gradient(153.07deg, #3EC6EB -2.47%, #1BC99F 102.78%)', borderRadius: '4px', fontSize: '12px', color: '#1e212a', padding: '2px 5px',display: 'inline-block',fontWeight: 'bold'}}>(Delhi/NCR)</span></a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/full-stack-node?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Full Stack Development with React &amp; Node JS(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/Java-backend-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Java Backend Development(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Android App Development with Kotlin(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/py-dev-django?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Python Backend Development with Django(Live)</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Machine Learning and Data Science</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Complete Data Science Program(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/dpa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Mastering Data Analytics</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>New Courses</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/py-dev-django?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Python Backend Development with Django(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Android App Development with Kotlin(Live)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/devops-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">DevOps Engineering - Planning to Production</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>School Courses</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/CS-12?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">CBSE className 12 Computer Science</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/school-guide-course?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">School Guide</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" className="remove-anchor__decoration" target="_self">All Courses</a></li>
                    </ul>
                 </li>
                 <li className="header-main__list-item" data-parent="true" aria-expanded="false" data-expandable="true">
                    <span>Tutorials</span><i className="gfg-icon gfg-icon_arrow-down gfg-icon_header"></i>
                    <ul className="mega-dropdown">
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Data Structures &amp; Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Data Structures</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-arrays-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Arrays</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-matrix-or-grid-data-structure-and-algorithms-tutorial/?ref=ghm" target="_self">Matrix</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-strings-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Strings</a></li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Linked List</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/?ref=ghm" target="_self">Singly Linked List</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/doubly-linked-list/?ref=ghm" target="_self">Doubly Linked List</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/circular-linked-list/?ref=ghm" target="_self">Circular Linked List</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/doubly-circular-linked-list-set-1-introduction-and-insertion/?ref=ghm" target="_self">Doubly Circular Linked List</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/?ref=ghm" target="_self">Linked List Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Stack</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Queue</a></li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Tree</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/generic-treesn-array-trees/?ref=ghm" target="_self">Generic Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-binary-tree-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Binary Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-binary-search-tree-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Binary Search Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-avl-tree/?ref=ghm" target="_self">AVL Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-of-b-tree-2/?ref=ghm" target="_self">B Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-of-b-tree/?ref=ghm" target="_self">B+ Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-red-black-tree/?ref=ghm" target="_self">Red Black Tree</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Tree Data Structure Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-heap-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Heap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-hashing-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Hashing</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Graph</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-set-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Set Data Structure</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-map-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Map Data Structure</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/advanced-data-structures/?ref=ghm" target="_self">Advanced Data Structure</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-data-structures/?ref=ghm" target="_self">Data Structures Tutorial</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Analysis of Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/?ref=ghm" target="_self">Design and Analysis of Algorithms</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/?ref=ghm" target="_self">Asymptotic Analysis</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/?ref=ghm" target="_self">Asymptotic Notations</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/?ref=ghm" target="_self">Worst, Average and Best Cases</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Searching Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/linear-search/?ref=ghm" target="_self">Linear Search</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/binary-search/?ref=ghm" target="_self">Binary Search</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/searching-algorithms/?ref=ghm" target="_self">Searching Algorithms Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Sorting Algorithms</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/selection-sort/?ref=ghm" target="_self">Selection Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/bubble-sort/?ref=ghm" target="_self">Bubble Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/insertion-sort/?ref=ghm" target="_self">Insertion Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/merge-sort/?ref=ghm" target="_self">Merge Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/quick-sort/?ref=ghm" target="_self">Quick Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/heap-sort/?ref=ghm" target="_self">Heap Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/counting-sort/?ref=ghm" target="_self">Counting Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/radix-sort/?ref=ghm" target="_self">Radix Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/bucket-sort-2/?ref=ghm" target="_self">Bucket Sort</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-sorting-algorithm/?ref=ghm" target="_self">Sorting Algorithms Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-greedy-algorithm-data-structures-and-algorithm-tutorials/?ref=ghm" target="_self">Greedy Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/?ref=ghm" target="_self">Dynamic Programming</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Graph Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-pattern-searching-data-structure-and-algorithm-tutorial/?ref=ghm" target="_self">Pattern Searching</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Recursion</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-backtracking-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Backtracking</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm-data-structure-and-algorithm-tutorials/?ref=ghm" target="_self">Divide and Conquer</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/mathematical-algorithms/?ref=ghm" target="_self">Mathematical Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/geometric-algorithms/?ref=ghm" target="_self">Geometric Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/?ref=ghm" target="_self">Bitwise Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/randomized-algorithms/?ref=ghm" target="_self">Randomized Algorithms</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-branch-and-bound-data-structures-and-algorithms-tutorial/?ref=ghm" target="_self">Branch and Bound</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-algorithms/?ref=ghm" target="_self">Algorithms Tutorial</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=ghm" target="_self">Complete DSA Tutorial</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm" target="_self">Competitive Programming</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Company Wise SDE Sheets</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Facebook SDE Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Amazon SDE Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Apple SDE Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Netflix SDE Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Google SDE Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/wipro-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Wipro Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/infosys-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Infosys Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/tcs-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">TCS Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cognizant-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">Cognizant Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/hcl-sde-sheet-interview-questions-and-answers/?ref=ghm" target="_self">HCL Coding Sheet</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>DSA Cheat Sheets</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/?ref=ghm" target="_self">SDE Sheets</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/?ref=ghm" target="_self">FAANG Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/?ref=ghm" target="_self">Love Babbaar Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/must-do-questions-for-companies-like-tcs-cts-hcl-ibm/?ref=ghm" target="_self">Mass Recruiter Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/must-do-coding-questions-for-product-based-companies/?ref=ghm" target="_self">Product-Based Coding Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/must-coding-questions-company-wise/?ref=ghm" target="_self">Company-Wise Preparation Sheet</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Top Interview Questions</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/?ref=ghm" target="_self">Top 100 DSA Interview Questions Topic-wise</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/?ref=ghm" target="_self">Top 50 Array Problems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/?ref=ghm" target="_self">Top 50 String Problems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-problems-on-stack-data-structure-asked-in-interviews/?ref=ghm" target="_self">Top 50 Problems on Stack</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-problems-on-heap-data-structure-asked-in-interviews/?ref=ghm" target="_self">Top 50 Problems on Heap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-20-linked-list-interview-question/?ref=ghm" target="_self">Top 20 Linked List Interview Question</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-tree-coding-problems-for-interviews/?ref=ghm" target="_self">Top 50 Tree Problems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-graph-coding-problems-for-interviews/?ref=ghm" target="_self">Top 50 Graph Problems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-interview-problems-on-recursion-algorithm/?ref=ghm" target="_self">Top 50 Problems on Recursion</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-20-greedy-algorithms-interview-questions/?ref=ghm" target="_self">Top 20 Greedy Algorithms Interview Questions</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-50-dynamic-programming-coding-problems-for-interviews/?ref=ghm" target="_self">Top 50 Dynamic Programming (DP) Problems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-20-hashing-technique-based-interview-questions/?ref=ghm" target="_self">Top 20 Hashing Technique based Interview Questions</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/?ref=ghm" target="_self">Top 20 Dynamic Programming Interview Questions</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/?ref=ghm" target="_self">Top 10 algorithms in Interview Questions</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/commonly-asked-data-structure-interview-questions-set-1/?ref=ghm" target="_self">Commonly Asked Data Structure Interview Questions</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Puzzles</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/puzzles/?ref=ghm" target="_self">All Puzzles</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-100-puzzles-asked-in-interviews/?ref=ghm" target="_self">Top 100 Puzzles Asked In Interviews</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-20-puzzles-commonly-asked-during-sde-interviews/?ref=ghm" target="_self">Top 20 Puzzles Commonly Asked During SDE Interviews</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-mcqs-on-puzzles-with-answers/?ref=ghm" target="_self">Top MCQs on Puzzles with Answers</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/tag/crossword-of-the-week/?ref=ghm" target="_self">Crossword Puzzle Of The Week</a></li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>System Design</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>System Design Tutorial</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/what-is-system-design-learn-system-design/?ref=ghm" target="_self">What is System Design</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-key-concepts-and-terminologies-learn-system-design/?ref=ghm" target="_self">Key Terminologies in System Design</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/analysis-of-monolithic-and-distributed-systems-learn-system-design/?ref=ghm" target="_self">Analysis and Architecture of Systems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/what-is-scalability-and-how-to-achieve-it-learn-system-design/?ref=ghm" target="_self">Scalability in System Design</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/complete-reference-to-databases-in-designing-systems/?ref=ghm" target="_self">Databases in System Design</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/what-is-high-level-design-learn-system-design/?ref=ghm" target="_self">High Level Design or HLD</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/what-is-low-level-design-or-lld-learn-system-design/?ref=ghm" target="_self">Low Level Design or LLD</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/communication-protocols-in-system-design/?ref=ghm" target="_self">Communication Protocols</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/web-server-proxies-and-their-role-in-designing-systems/?ref=ghm" target="_self">Web Servers and Proxies</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/?ref=ghm" target="_self">Case Studies in Designing Systems</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/system-design-tutorial/?ref=ghm" target="_self">Complete System Design Tutorial</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Software Design Patterns</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/design-patterns-set-1-introduction/?ref=ghm" target="_self">Factory Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/observer-pattern-set-1-introduction/?ref=ghm" target="_self">Observer Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/singleton-design-pattern/?ref=ghm" target="_self">Singleton Design Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/decorator-pattern/?ref=ghm" target="_self">Decorator Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/strategy-pattern-set-1/?ref=ghm" target="_self">Strategy Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/adapter-pattern/?ref=ghm" target="_self">Adapter Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/command-pattern/?ref=ghm" target="_self">Command Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/iterator-pattern/?ref=ghm" target="_self">Iterator Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/prototype-design-pattern/?ref=ghm" target="_self">Prototype Design Pattern</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/software-design-patterns/?ref=ghm" target="_self">All Design Patterns</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/complete-roadmap-to-learn-system-design/?ref=ghm" target="_self">System Design Roadmap</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/?ref=ghm" target="_self">Top 10 System Design Interview Questions and Answers</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Interview Corner</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/company-preparation/?ref=ghm" target="_self">Company Preparation</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/interview-preparation-for-software-developer/?ref=ghm" target="_self">Top Topics</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/company-tags/" target="_self">Practice Company Questions</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/company-interview-corner/?ref=ghm" target="_self">Interview Experiences</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/experienced-interview-experiences-company-wise/?ref=ghm" target="_self">Experienced Interviews</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/internship-interview-experiences-company-wise/?ref=ghm" target="_self">Internship Interviews</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm" target="_self">Competitive Programming</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/quiz-corner-gq/?ref=ghm" target="_self">Multiple Choice Quizzes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/aptitude-questions-and-answers/?ref=ghm" target="_self">Aptitude for Placements</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Languages</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/c-programming-language/?ref=ghm" target="_self">C</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/c-plus-plus/?ref=ghm" target="_self">C++</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/java/?ref=ghm" target="_self">Java</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-programming-language/?ref=ghm" target="_self">Python</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=ghm" target="_self">JavaScript</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/php-tutorials/?ref=ghm" target="_self">PHP</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/r-tutorial/" target="_self">R Tutorial</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/csharp-programming-language/?ref=ghm" target="_self">C#</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sql-tutorial/?ref=ghm" target="_self">SQL</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/scala-programming-language/?ref=ghm" target="_self">Scala</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/perl-programming-language/?ref=ghm" target="_self">Perl</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/golang/?ref=ghm" target="_self">Go Language</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/kotlin-programming-language/?ref=ghm" target="_self">Kotlin</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Web Development</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/html-tutorials/?ref=ghm" target="_self">HTML</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/css-tutorials/?ref=ghm" target="_self">CSS</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=ghm" target="_self">JavaScript</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/php-tutorials/?ref=ghm" target="_self">PHP</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>CSS Frameworks</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/bootstrap/?ref=ghm" target="_self">Bootstrap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/tailwind-css/?ref=ghm" target="_self">Tailwind CSS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/foundation/?ref=ghm" target="_self">Foundation CSS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/materialize-css/?ref=ghm" target="_self">Materialize CSS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/bulma/?ref=ghm" target="_self">Bulma</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/pure-css/?ref=ghm" target="_self">Pure CSS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/primer-css/?ref=ghm" target="_self">Primer CSS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/blaze-ui/?ref=ghm" target="_self">Blaze UI</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/semantic-ui/?ref=ghm" target="_self">Semantic UI</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>JavaScript Frameworks</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/angularjs/?ref=ghm" target="_self">AngularJS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/angular-primeng/?ref=ghm" target="_self">Angular PrimeNG</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/angular-ngx-bootstrap/?ref=ghm" target="_self">Angular ngx Bootstrap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/nodejs/?ref=ghm" target="_self">NodeJS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/express-js/?ref=ghm" target="_self">Express.js</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>JavaScript Libraries</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jquery-tutorials/?ref=ghm" target="_self">jQuery</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jquery-mobile/?ref=ghm" target="_self">jQuery Mobile</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jquery-ui/?ref=ghm" target="_self">jQuery UI</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jquery-easyui/?ref=ghm" target="_self">jQuery EasyUI</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jqwidgets/?ref=ghm" target="_self">jQWidgets</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/learn-reactjs/?ref=ghm" target="_self">ReactJS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/react-bootstrap/?ref=ghm" target="_self">React Bootstrap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/react-rebass/?ref=ghm" target="_self">React Rebass</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/react-desktop/?ref=ghm" target="_self">React Desktop</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/react-suite/?ref=ghm" target="_self">React Suite</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/reactjs-evergreen/?ref=ghm" target="_self">ReactJS Evergreen</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/reactjs-reactstrap/?ref=ghm" target="_self">ReactJS Reactstrap</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ant-design/?ref=ghm" target="_self">Ant Design</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/blueprintjs/?ref=ghm" target="_self">BlueprintJS</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/p5-js/?ref=ghm" target="_self">p5.js</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/lodash/?ref=ghm" target="_self">Lodash</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/tensorflow-js/?ref=ghm" target="_self">TensorFlow.js</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/moment-js/?ref=ghm" target="_self">Moment.js</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/collect-js/?ref=ghm" target="_self">Collect.js</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/wordpress/?ref=ghm" target="_self">WordPress</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/json/?ref=ghm" target="_self">JSON</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Web Dev Cheat Sheets</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/html-cheat-sheet-a-basic-guide-to-html/?ref=ghm" target="_self">HTML Cheat Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/?ref=ghm" target="_self">CSS Cheat Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/bootstrap-cheatsheet-a-basic-guide-to-bootstrap/?ref=ghm" target="_self">Bootstrap Cheat Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/?ref=ghm" target="_self">JS Cheat Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jquery-cheat-sheet-a-basic-guide-to-jquery/?ref=ghm" target="_self">jQuery Cheat Sheet</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/angular-cheat-sheet-a-basic-guide-to-angular/?ref=ghm" target="_self">Angular Cheat Sheet</a></li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>ML &amp; Data Science</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Machine Learning</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/machine-learning/" target="_self">ML Tutorial</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/machine-learning-mathematics/" target="_self">ML Maths</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/machine-learning-projects/" target="_self">ML Projects</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-science-tutorial/" target="_self">Data Science using Python</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/r-programming-for-data-science/" target="_self">Data Science using R</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Data Science Packages</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/pandas-tutorial/" target="_self">Pandas Tutorial</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/numpy-tutorial/" target="_self">NumPy Tutorial</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Data Visualization</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Data Visualization with Python</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-data-visualization-tutorial/" target="_self">Python Data Visualization Tutorial</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/matplotlib-tutorial/" target="_self">Matplotlib Tutorial</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-bokeh-tutorial-interactive-data-visualization-with-bokeh/" target="_self">Bokeh Tutorial</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-plotly-tutorial/" target="_self">Plotly Tutorial</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-seaborn-tutorial/" target="_self">Seaborn Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Data Visualization with R</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-visualization-in-r/" target="_self">Data Visualization with R</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/getting-started-with-plotly-in-r/" target="_self">Plotly Tutorial</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-visualization-with-r-and-ggplot2/" target="_self">ggplot Tutorial</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>Data Visualization Tools</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/tableau-tutorial/" target="_self">Tableau</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/power-bi-tutorial/" target="_self">Power BI</a></li>
                                      </ul>
                                   </li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Data Analysis</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-analysis-with-python/" target="_self">Data Analysis with Python</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/data-analysis-using-r/" target="_self">Data Analysis with R</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Deep Learning</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/deep-learning-tutorial/" target="_self">Deep Learning Tutorial</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/5-deep-learning-project-ideas-for-beginners/" target="_self">Deep Learning Projects</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/natural-language-processing-nlp-tutorial/" target="_self">NLP Tutorial</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/opencv-python-tutorial/" target="_self">OpenCV Tutorial</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Interview Questions</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/machine-learning-interview-questions/" target="_self">Machine Learning Interview Question</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/deep-learning-interview-questions/" target="_self">Deep Learning Interview Question</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/python-interview-questions/" target="_self">Python Interview Questions</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/r-interview-questions/" target="_self">Top 50 R Interview Questions</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>ML Frameworks</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/introduction-to-tensorflow/" target="_self">Tensorflow</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/getting-started-with-pytorch/" target="_self">PyTorch</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/understanding-pytorch-lightning-datamodules/" target="_self">PyTorch Lightning</a></li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>CS Subjects</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/engineering-mathematics-tutorials/?ref=ghm" target="_self">Mathematics</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/operating-systems/?ref=ghm" target="_self">Operating System</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/dbms/?ref=ghm" target="_self">DBMS</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/computer-network-tutorials/?ref=ghm" target="_self">Computer Networks</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/?ref=ghm" target="_self">Computer Organization and Architecture</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/?ref=ghm" target="_self">Theory of Computation</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/compiler-design-tutorials/?ref=ghm" target="_self">Compiler Design</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/#blg/?ref=ghm" target="_self">Digital Logic</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/software-engineering/?ref=ghm" target="_self">Software Engineering</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>DevOps</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/git-tutorial/?ref=ghm" target="_self">GIT</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/aws-tutorial/?ref=ghm" target="_self">AWS</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/docker-tutorial/?ref=ghm" target="_self">Docker</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/kubernetes-tutorial/?ref=ghm" target="_self">Kubernetes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/microsoft-azure/?ref=ghm" target="_self">Microsoft Azure Tutorial</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/google-cloud-platform-tutorial/?ref=ghm" target="_self">Google Cloud Platform</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>School Learning</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/english-grammar/?ref=ghm" target="_self">English Grammar</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/school-learning/?ref=ghm" target="_self">School Programming</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Mathematics</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/number-system-and-arithmetic/?ref=ghm" target="_self">Number System</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/algebra/?ref=ghm" target="_self">Algebra</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/trigonometry/?ref=ghm" target="_self">Trigonometry</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/statistics/?ref=ghm" target="_self">Statistics</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/probability-in-maths/?ref=ghm" target="_self">Probability</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/geometry/?ref=ghm" target="_self">Geometry</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/mensuration/?ref=ghm" target="_self">Mensuration</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/calculus/?ref=ghm" target="_self">Calculus</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>CBSE Syllabus </span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-syllabus/?ref=ghm" target="_self">className 8 Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-syllabus/?ref=ghm" target="_self">className 9 Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-syllabus/?ref=ghm" target="_self">className 10 Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-syllabus/?ref=ghm" target="_self">className 11 Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-syllabus/?ref=ghm" target="_self">className 12 Syllabus</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Maths Notes (className 8-12)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-maths-notes/?ref=ghm" target="_self">className 8 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-maths-notes/?ref=ghm" target="_self">className 9 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-maths-notes/?ref=ghm" target="_self">className 10 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-maths-notes/?ref=ghm" target="_self">className 11 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-maths-notes/?ref=ghm" target="_self">className 12 Notes</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Maths Formulas (className 8 -11)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-maths-formulas/?ref=ghm" target="_self">className 8 Formulas</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-maths-formulas/?ref=ghm" target="_self">className 9 Formulas</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-maths-formulas/?ref=ghm" target="_self">className 10 Formulas</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-maths-formulas/?ref=ghm" target="_self">className 11 Formulas</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>NCERT Solutions</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-8-maths/?ref=ghm" target="_self">className 8 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-9-maths/?ref=ghm" target="_self">className 9 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-10-maths/?ref=ghm" target="_self">className 10 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-11-maths/?ref=ghm" target="_self">className 11 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-12-maths/?ref=ghm" target="_self">className 12 Maths Solution</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>RD Sharma Solutions</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/rd-sharma-className-8-solutions-for-maths/?ref=ghm" target="_self">className 8 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/rd-sharma-className-9-solutions/?ref=ghm" target="_self">className 9 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/rd-sharma-className-10-solutions/?ref=ghm" target="_self">className 10 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/rd-sharma-className-11-solutions-for-maths/?ref=ghm" target="_self">className 11 Maths Solution</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/rd-sharma-className-12-solutions-for-maths/?ref=ghm" target="_self">className 12 Maths Solution</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Science Notes</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-8-science-notes/?ref=ghm" target="_self">className 8 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-9-science-revision-notes/?ref=ghm" target="_self">className 9 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-10-science-notes/?ref=ghm" target="_self">className 10 Notes</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Physics Notes (className 8-12)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-physics-className-8-notes/?ref=ghm" target="_self">className 8 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-physics-notes/?ref=ghm" target="_self">className 9 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-notes-for-className-10-physics/?ref=ghm" target="_self">className 10 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-physics-notes/?ref=ghm" target="_self">className 11 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-notes-className-12-physics/?ref=ghm" target="_self">className 12 Notes</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Chemistry Notes (className 8-12)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-chemistry-notes/?ref=ghm" target="_self">className 8 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-chemistry-notes/?ref=ghm" target="_self">className 9 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-chemistry-notes/?ref=ghm" target="_self">className 10 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-notes-className-11-chemistry/?ref=ghm" target="_self">className 11 Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-notes-className-12-chemistry/?ref=ghm" target="_self">className 12 Notes</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Biology Notes</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-biology-syllabus/?ref=ghm" target="_self">className 8</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-9-biology-syllabus/?ref=ghm" target="_self">className 9</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-10-biology-syllabus/?ref=ghm" target="_self">className 10</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-biology-notes/?ref=ghm" target="_self">className 11</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Social Science Syllabus </span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-7-social-science/?ref=ghm" target="_self">className 7 SS Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-8-social-science/?ref=ghm" target="_self">className 8 SS Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-9-social-science/?ref=ghm" target="_self">className 9 SS Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-social-science-syllabus/?ref=ghm" target="_self">className 10 SS Syllabus</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Social Science Notes</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>SS Notes (className 7-12)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-7-social-science-notes/?ref=ghm" target="_self">className 7 Notes</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-civics-notes/?ref=ghm" target="_self">className 8 Notes</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-9-social-science-revision-notes/?ref=ghm" target="_self">className 9 Notes</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-10-social-science-notes/?ref=ghm" target="_self">className 10 Notes</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>CBSE History Notes (className 7-10)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-7-social-science-history/?ref=ghm" target="_self">History className 7</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-history-notes/?ref=ghm" target="_self">History className 8</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-9-social-science-history-notes/?ref=ghm" target="_self">History className 9</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>CBSE Geography Notes (className 7-10)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-7-geography-notes/?ref=ghm" target="_self">Geo. className 7</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-8-social-science-geography/?ref=ghm" target="_self">Geo. className 8</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/className-9-social-science-geography-notes/?ref=ghm" target="_self">Geo. className 9</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>CBSE Civics Notes (className 7-10)</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-7-civics-notes/?ref=ghm" target="_self">Civics className 7</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-civics-notes/?ref=ghm" target="_self">Civics className 8</a></li>
                                      </ul>
                                   </li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>CBSE Previous Year Papers</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-maths-previous-year-paper-2022/?ref=ghm" target="_self">Maths</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-physics/?ref=ghm" target="_self">Physics</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-history/?ref=ghm" target="_self">History</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-previous-year-question-paper-className-12-geography/?ref=ghm" target="_self">Georgraphy</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-political-science/?ref=ghm" target="_self">Political Science</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-economics/?ref=ghm" target="_self">Economics</a></li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Commerce</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-business-studies-notes/?ref=ghm" target="_self">Business Studies (className 11th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-accountancy-notes/?ref=ghm" target="_self">Accountancy (className 11th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-microeconomics-notes/?ref=ghm" target="_self">Microeconomics (className 11th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-11-statistics-for-economics-notes/?ref=ghm" target="_self">Statistics for Economics (className 11th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-business-studies-notes/?ref=ghm" target="_self">Business Studies (className 12th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-accountancy-notes/?ref=ghm" target="_self">Accountancy (className 12th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/cbse-className-12-macroeconomics-notes/?ref=ghm" target="_self">Macroeconomics (className 12th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/indian-economic-development/?ref=ghm" target="_self">Indian Economic Development (className 12th)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/management/?ref=ghm" target="_self">Management</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/income-tax/?ref=ghm" target="_self">Income Tax</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/finance/?ref=ghm" target="_self">Finance</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>GATE</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/courses/gate-live-course?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">GATE 2024 Live Course</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/gate-cs-notes-gq/?ref=ghm" target="_self">GATE Computer Science Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/lmns-gq/?ref=ghm" target="_self">Last Minute Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/gate-corner-2-gq/?ref=ghm" target="_self">GATE CS Solved Papers</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/original-gate-previous-year-question-papers-cse-and-it-gq/?ref=ghm" target="_self">GATE CS Original Papers and Official Keys</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/gate-cse-syllabus-2023/?ref=ghm" target="_self">GATE CS 2023 Syllabus</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-prepare-gate-2020-computer-science-paper/?ref=ghm" target="_self">Important Topics for GATE CS</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/gate-2023-exam-dates/?ref=ghm" target="_self">GATE 2023 Important Dates</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>Other CS Exams</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>ISRO</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/isro-original-papers-official-keys/?ref=ghm" target="_self">ISRO CS Original Papers and Official Keys</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/isro-cs-preparation/?ref=ghm" target="_self">ISRO CS Solved Papers</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/isro-cse-syllabus-scientistengineer-exam-2018/?ref=ghm" target="_self">ISRO CS Syllabus for Scientist/Engineer Exam</a></li>
                                      </ul>
                                   </li>
                                   <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                      <span>UGC NET</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                      <ul className="mega-dropdown">
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ugc-net-cs-notes-according-to-syllabus-of-paper-ii/?ref=ghm" target="_self">UGC NET CS Notes Paper II</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ugc-net-cs-notes-according-to-syllabus-of-paper-iii-core-group/?ref=ghm" target="_self">UGC NET CS Notes Paper III</a></li>
                                         <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ugc-net-cs-preparation/?ref=ghm" target="_self">UGC NET CS Solved Papers</a></li>
                                      </ul>
                                   </li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>UPSC Study Material</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-of-geography-for-upsc/?ref=ghm" target="_self">Geography Notes</a></li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>History Notes</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/modern-indian-history-notes-upsc/?ref=ghm" target="_self">Modern Indian History Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/medieval-history-notes-upsc/?ref=ghm" target="_self">Medieval Indian History Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ancient-history-notes-upsc/?ref=ghm" target="_self">Ancient Indian History Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-of-history-for-upsc/?ref=ghm" target="_self">Complete History Notes</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-of-science-and-technology-for-upsc/?ref=ghm" target="_self">Science &amp; Tech. Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-in-ethics-for-upsc/?ref=ghm" target="_self">Ethics Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-in-polity-for-upsc/?ref=ghm" target="_self">Polity Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/important-topics-in-economics-for-upsc/?ref=ghm" target="_self">Economics Notes</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/list-of-important-government-schemes-in-india/?ref=ghm" target="_self">Government Schemes (Updated)</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/upsc-previous-year-papers/?ref=ghm" target="_self">UPSC Previous Year Papers</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Student</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/?ref=ghm" target="_self">Campus Ambassador Program</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/school-ambassador/?ref=ghm" target="_self">School Ambassador Program</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/computer-science-projects/?ref=ghm" target="_self">Project</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/geek-of-the-month/?ref=ghm" target="_self">Geek of the Month</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/campus-geek-of-the-month/?ref=ghm" target="_self">Campus Geek of the Month</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/placements-gq/?ref=ghm" target="_self">Placement Course</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm" target="_self">Competitive Programming</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/testimonials/?ref=ghm" target="_self">Testimonials</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/geeksforgeeks-student-chapter/?ref=ghm" target="_self">Student Chapter</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/category/geek-on-the-top/?ref=ghm" target="_self">Geek on the Top</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/internship/?ref=ghm" target="_self">Internship</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/careers/?ref=ghm" target="_self">Careers</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>SSC CGL Study Material</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-cgl-syllabus-2022/?ref=ghm" target="_self">SSC CGL Syllabus</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-cgl-general-studies-syllabus/?ref=ghm" target="_self">General Studies</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-cgl-english-syllabus/?ref=ghm" target="_self">English</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-reasoning-syllabus/?ref=ghm" target="_self">Reasoning</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-cgl-practice-papers/?ref=ghm" target="_self">Subjectwise Practice Papers</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ssc-cgl-previous-year-papers/?ref=ghm" target="_self">Previous Year Papers</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Banking Exams Study Material</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>SBI Clerk</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-syllabus-2022/?ref=ghm" target="_self">SBI Clerk Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-general-awareness-syllabus/?ref=ghm" target="_self">General Awareness</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-english-syllabus-2022/?ref=ghm" target="_self">English</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-quantitative-aptitude-syllabus-2022/?ref=ghm" target="_self">Quantitative Aptitude</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-reasoning-ability-syllabus/?ref=ghm" target="_self">Reasoning Ability</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-clerk-practice-papers/?ref=ghm" target="_self">SBI Clerk Practice Papers</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>SBI PO</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-syllabus-2022/?ref=ghm" target="_self">SBI PO Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-general-awareness-2022/?ref=ghm" target="_self">General Awareness</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-english-syllabus/?ref=ghm" target="_self">English</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-quantitative-aptitude-2022/?ref=ghm" target="_self">Quantitative Aptitude</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-reasoning-syllabus/?ref=ghm" target="_self">Reasoning Ability</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-previous-year-papers/?ref=ghm" target="_self">Previous Year Papers</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/sbi-po-practice-papers/?ref=ghm" target="_self">SBI PO Practice Papers</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>IBPS PO</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/syllabus-of-ibps-po-2022/?ref=ghm" target="_self">IBPS PO 2022 Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ibps-po-english-syllabus/?ref=ghm" target="_self">English Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/reasoning-syllabus-for-ibps-po/?ref=ghm" target="_self">Reasoning Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ibps-po-previous-year-papers/?ref=ghm" target="_self">Previous Year Papers</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ibps-po-mock-question-paper-2022/?ref=ghm" target="_self">Mock Question Papers</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/general-awareness-for-ibps-po-bank-exam/?ref=ghm" target="_self">General Awareness</a></li>
                                </ul>
                             </li>
                             <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                                <span>IBPS Clerk</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                                <ul className="mega-dropdown">
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/detailed-syllabus-of-ibps-clerk/?ref=ghm" target="_self">IBPS Clerk Syllabus</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/english-syllabus-of-ibps-clerk-exam/?ref=ghm" target="_self">English Notes</a></li>
                                   <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/ibps-clerk-previous-year-question-papers/?ref=ghm" target="_self">Previous Year Papers</a></li>
                                </ul>
                             </li>
                          </ul>
                       </li>
                    </ul>
                 </li>
                 <li className="header-main__list-item" data-parent="true" aria-expanded="false" data-expandable="true">
                    <span>Jobs</span><i className="gfg-icon gfg-icon_arrow-down gfg-icon_header"></i>
                    <ul className="mega-dropdown">
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>For Job Seekers</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/jobs" target="_self">Get Hired: Apply for Jobs</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/events/rec/job-a-thon?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=jobs" target="_self">Job-a-thon: Hiring Challenge</a></li>
                          </ul>
                       </li>
                       <li className="mega-dropdown__list-item" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>For Recruiters</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/hire-with-us/dashboard" target="_self">Recruiter Dashboard</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://www.geeksforgeeks.org/job-a-thon/" target="_self">Corporate Hiring Solutions</a></li>
                          </ul>
                       </li>
                    </ul>
                 </li>
                 <li className="header-main__list-item selected" data-parent="true" aria-expanded="true" data-expandable="true">
                    <span>Practice</span><i className="gfg-icon gfg-icon_arrow-down gfg-icon_header"></i>
                    <ul className="mega-dropdown">
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;sortBy=submissions&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">All DSA Problems</a></li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/problem-of-the-day?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Problem of the Day</a></li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=1&amp;sortBy=submissions&amp;curated_names[]=SDE%20Sheet?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">GFG SDE Sheet</a></li>
                       <li className="mega-dropdown__list-item selected" data-parent="true" aria-expanded="true" data-expandable="true">
                          <span>Curated DSA Lists</span><i className="gfg-icon gfg-icon_arrow-right"></i>
                          <ul className="mega-dropdown" style={{top: '-4px !important'}}>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=8&amp;sortBy=submissions&amp;curated_names[]=Beginner%27s%20DSA%20Sheet&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Beginner's DSA Sheet</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=7&amp;sortBy=submissions&amp;curated_names[]=Love%20Babbar%20Sheet&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Love Babbar Sheet</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=2&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Array%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Top 50 Array Problems</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=3&amp;curated[]=3&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20String%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Top 50 String Problems</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=6&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Tree%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Top 50 Tree Problems</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=5&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Graph%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Top 50 Graph Problems</a></li>
                             <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=4&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20DP%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header" target="_self">Top 50 DP Problems</a></li>
                          </ul>
                       </li>
                    </ul>
                 </li>
                 <li className="header-main__list-item" data-parent="true" aria-expanded="false" data-expandable="true">
                    <span>Contests</span><i className="gfg-icon gfg-icon_arrow-down gfg-icon_header"></i>
                    <ul className="mega-dropdown">
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/events/rec/interview-series?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests" target="_self">GFG Weekly Coding Contest</a></li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/events/rec/job-a-thon?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests" target="_self">Job-A-Thon: Hiring Challenge</a></li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/events/rec/step-up-coding-school?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests" target="_self">BiWizard School Contest</a></li>
                       <li className="mega-dropdown__list-item" data-child="true" aria-expanded="false" data-expandable="false"><a href="https://practice.geeksforgeeks.org/events?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests" target="_self">All Contests and Events</a></li>
                    </ul>
                 </li>
              </ul>
              <ul className="header-main__left-list" data-nl="false">
                 <li className="header-main__left-list-item gcse-search_li p-relative" aria-expanded="false" data-expandable="false">
                    <div className="gcse-form-search-suggestion_wrapper">
                       <form id="gcse-form" className="gcse-form_className p-relative" data-sm="false"><span className="front-search-icon"><i className="gfg-icon gfg-icon_search gfg-icon_white gcse-search__icon gcse-search-icon_grey"></i></span>
                          <input className="gcse-search-input__wrapper" id="gcse-search-input" aria-expanded="false" placeholder="Search..." autocomplete="off"/>
                          <i className="gfg-icon gfg-icon_times gfg-icon_white hide-search"></i>
                          <button className="gcse-search__btn not-expanded">
                          <i className="gfg-icon gfg-icon_search gfg-icon_white gcse-search__icon"></i></button>
                       </form>
                       <div className="gfg-search-suggestion_wrapper" style={{visibility:'hidden'}}></div>
                       <div></div>
                    </div>
                 </li>
                 <li>
                    <div className="darkMode-wrap" data-mode="Switch to Dark Mode">
                       <button data-gfg-action="toggleGFGTheme">
                          <div id="darkMode-wrap-red-dot" style={{height: '12px', width: '12px', backgroundColor: 'rgb(235, 34, 34)', borderRadius: '999999px', position: 'absolute', top: '4px', right: '0px'}}></div>
                          <i className="gfg-icon gfg-icon_dark-mode"></i>
                       </button>
                       <span id="darkModeTooltipText">Switch to Dark Mode</span>
                    </div>
                 </li>
                 <li className="header-main__left-list-item google-translate-parent-element" aria-expanded="false" data-expanded="true">
                    <div className="translate" id="g_translater">
                       <div id="google_translate_element" data-show="false"></div>
                    </div>
                    <i className="gfg-icon gfg-icon_translate googleTranslateToggle" data-gfg-action="google_translate_element"></i>
                 </li>
                 <li id="userProfileId" className="header-main__left-list-item p-relative" aria-expanded="false" data-expandable="false"><a type="button" className="header-main__signup login-modal-btn" href="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/data-structures/?ref=shm">Sign In</a></li>
              </ul>
           </div>
           <div className="gfg-overlay display-none" id="gfg-overlay"></div>
           <div className="header-sidebar__wrapper">
              <ul className="header-sidebar__list">
                 <li className="header-sidebar__list-item"><a href="https://auth.geeksforgeeks.org/?to=https://www.geeksforgeeks.org/data-structures/?ref=shm" className="gfg-sec-bg color-white login-modal-btn" style={{color: 'white!important', textAlign: 'center', padding : '10px!important'}} target="_self">Sign In</a></li>
                 <li className="header-sidebar__list-item"><a href="https://www.geeksforgeeks.org/?ref=ghm" target="_self">Home</a></li>
                 <li className="header-sidebar__list-item"><a href="https://www.geeksforgeeks.org/videos/watchlist/?ref=ghm" target="_self"><span className="gfg-icon gfg-icon_video"></span><span>Saved Videos</span></a></li>
                 <li className="header-sidebar__list-item"><a href="https://practice.geeksforgeeks.org/courses?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses" target="_self">Courses</a></li>
                 <li>
                    <ul id="sidebar-list">
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Summer Skill Up
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Android App Development (Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Science (Live)</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Structures and Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA for Interview Preparation</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/geeks-classNamees-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA Live for Working Professionals</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA Self-paced in C++/Java</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA Self-paced in Python</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA Self-paced in Javascript</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/c-Programming-basic-to-advanced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA Self-paced in C</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>For Working Professionals
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/geeks-classNamees-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Structure &amp; Algorithm classNamees (Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/system-design-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">System Design (Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/devops-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DevOps(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Structures &amp; Algorithms in JavaScript</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/category/all?courseType=live&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Explore More Live Courses</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Full Stack Development&nbsp;(Delhi/NCR)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA for Interview Preparation&nbsp;(Delhi/NCR)</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>For Students
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Full Stack Development&nbsp;Internship Certificate</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dsa-interview-preparation-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DSA for Interview Preparation&nbsp;(Delhi/NCR)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/complete-interview-preparation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Interview Preparation Course</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Science (Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/gate-live-course/?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">GATE CS &amp; IT 2024</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-structures-and-algorithms-in-javascript?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Structures &amp; Algorithms in JavaScript</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dsa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Structure &amp; Algorithm-Self Paced(C++/JAVA)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/Data-Structures-With-Python?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Data Structures &amp; Algorithms in Python</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/category/all?courseType=online&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Explore More Self-Paced Courses</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Programming Languages
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/cpp-stl?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">C++ Programming - Beginner to Advanced</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/Java-Foundation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Java Programming - Beginner to Advanced</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/c-foundation?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">C Programming - Beginner to Advanced</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Web Development
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/mern-full-stack-development-classNameroom?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Full Stack Development&nbsp;(Delhi/NCR)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/full-stack-node?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Full Stack Development with React &amp; Node JS(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/Java-backend-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Java Backend Development(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Android App Development with Kotlin(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/py-dev-django?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Python Backend Development with Django(Live)</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Machine Learning and Data Science
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Complete Data Science Program(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/dpa-self-paced?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Mastering Data Analytics</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>New Courses
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/py-dev-django?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Python Backend Development with Django(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/android-dev-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">Android App Development with Kotlin(Live)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/devops-live?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">DevOps Engineering - Planning to Production</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>School Courses
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/CS-12?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">CBSE className 12 Computer Science</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/school-guide-course?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">School Guide</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Structures &amp; Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=ghm">Complete DSA Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm">Competitive Programming</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Structures
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-arrays-data-structure-and-algorithm-tutorials/?ref=ghm">Arrays</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-matrix-or-grid-data-structure-and-algorithms-tutorial/?ref=ghm">Matrix</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-strings-data-structure-and-algorithm-tutorials/?ref=ghm">Strings</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-stack-data-structure-and-algorithm-tutorials/?ref=ghm">Stack</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-queue-data-structure-and-algorithm-tutorials/?ref=ghm">Queue</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-heap-data-structure-and-algorithm-tutorials/?ref=ghm">Heap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-hashing-data-structure-and-algorithm-tutorials/?ref=ghm">Hashing</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=ghm">Graph</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-set-data-structure-and-algorithm-tutorials/?ref=ghm">Set Data Structure</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-map-data-structure-and-algorithm-tutorials/?ref=ghm">Map Data Structure</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/advanced-data-structures/?ref=ghm">Advanced Data Structure</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-data-structures/?ref=ghm">Data Structures Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Linked List
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-structures/linked-list/singly-linked-list/?ref=ghm">Singly Linked List</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/doubly-linked-list/?ref=ghm">Doubly Linked List</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/circular-linked-list/?ref=ghm">Circular Linked List</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/doubly-circular-linked-list-set-1-introduction-and-insertion/?ref=ghm">Doubly Circular Linked List</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-linked-list-data-structure-and-algorithm-tutorial/?ref=ghm">Linked List Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Tree
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/generic-treesn-array-trees/?ref=ghm">Generic Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-binary-tree-data-structure-and-algorithm-tutorials/?ref=ghm">Binary Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-binary-search-tree-data-structure-and-algorithm-tutorials/?ref=ghm">Binary Search Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-avl-tree/?ref=ghm">AVL Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-of-b-tree-2/?ref=ghm">B Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-of-b-tree/?ref=ghm">B+ Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-red-black-tree/?ref=ghm">Red Black Tree</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/?ref=ghm">Tree Data Structure Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-greedy-algorithm-data-structures-and-algorithm-tutorials/?ref=ghm">Greedy Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-dynamic-programming-data-structures-and-algorithm-tutorials/?ref=ghm">Dynamic Programming</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-graphs-data-structure-and-algorithm-tutorials/?ref=ghm">Graph Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-pattern-searching-data-structure-and-algorithm-tutorial/?ref=ghm">Pattern Searching</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/?ref=ghm">Recursion</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-backtracking-data-structure-and-algorithm-tutorials/?ref=ghm">Backtracking</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-divide-and-conquer-algorithm-data-structure-and-algorithm-tutorials/?ref=ghm">Divide and Conquer</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/mathematical-algorithms/?ref=ghm">Mathematical Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/geometric-algorithms/?ref=ghm">Geometric Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-bitwise-algorithms-data-structures-and-algorithms-tutorial/?ref=ghm">Bitwise Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/randomized-algorithms/?ref=ghm">Randomized Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-branch-and-bound-data-structures-and-algorithms-tutorial/?ref=ghm">Branch and Bound</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-algorithms/?ref=ghm">Algorithms Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Analysis of Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/design-and-analysis-of-algorithms/?ref=ghm">Design and Analysis of Algorithms</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/?ref=ghm">Asymptotic Analysis</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-3asymptotic-notations/?ref=ghm">Asymptotic Notations</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/?ref=ghm">Worst, Average and Best Cases</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Searching Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/linear-search/?ref=ghm">Linear Search</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/binary-search/?ref=ghm">Binary Search</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/searching-algorithms/?ref=ghm">Searching Algorithms Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Sorting Algorithms
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/selection-sort/?ref=ghm">Selection Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/bubble-sort/?ref=ghm">Bubble Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/insertion-sort/?ref=ghm">Insertion Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/merge-sort/?ref=ghm">Merge Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/quick-sort/?ref=ghm">Quick Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/heap-sort/?ref=ghm">Heap Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/counting-sort/?ref=ghm">Counting Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/radix-sort/?ref=ghm">Radix Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/bucket-sort-2/?ref=ghm">Bucket Sort</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-sorting-algorithm/?ref=ghm">Sorting Algorithms Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Company Wise SDE Sheets
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/facebookmeta-sde-sheet-interview-questions-and-answers/?ref=ghm">Facebook SDE Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/amazon-sde-sheet-interview-questions-and-answers/?ref=ghm">Amazon SDE Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/apple-sde-sheet-interview-questions-and-answers/?ref=ghm">Apple SDE Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/netflix-sde-sheet-interview-questions-and-answers/?ref=ghm">Netflix SDE Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/google-sde-sheet-interview-questions-and-answers/?ref=ghm">Google SDE Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/wipro-sde-sheet-interview-questions-and-answers/?ref=ghm">Wipro Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/infosys-sde-sheet-interview-questions-and-answers/?ref=ghm">Infosys Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/tcs-sde-sheet-interview-questions-and-answers/?ref=ghm">TCS Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cognizant-sde-sheet-interview-questions-and-answers/?ref=ghm">Cognizant Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/hcl-sde-sheet-interview-questions-and-answers/?ref=ghm">HCL Coding Sheet</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>DSA Cheat Sheets
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sde-sheet-a-complete-guide-for-sde-preparation/?ref=ghm">SDE Sheets</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/must-do-coding-questions-for-companies-like-amazon-microsoft-adobe/?ref=ghm">FAANG Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/?ref=ghm">Love Babbaar Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/must-do-questions-for-companies-like-tcs-cts-hcl-ibm/?ref=ghm">Mass Recruiter Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/must-do-coding-questions-for-product-based-companies/?ref=ghm">Product-Based Coding Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/must-coding-questions-company-wise/?ref=ghm">Company-Wise Preparation Sheet</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Top Interview Questions
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-100-data-structure-and-algorithms-dsa-interview-questions-topic-wise/?ref=ghm">Top 100 DSA Interview Questions Topic-wise</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-array-coding-problems-for-interviews/?ref=ghm">Top 50 Array Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-string-coding-problems-for-interviews/?ref=ghm">Top 50 String Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-problems-on-stack-data-structure-asked-in-interviews/?ref=ghm">Top 50 Problems on Stack</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-problems-on-heap-data-structure-asked-in-interviews/?ref=ghm">Top 50 Problems on Heap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-20-linked-list-interview-question/?ref=ghm">Top 20 Linked List Interview Question</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-tree-coding-problems-for-interviews/?ref=ghm">Top 50 Tree Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-graph-coding-problems-for-interviews/?ref=ghm">Top 50 Graph Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-interview-problems-on-recursion-algorithm/?ref=ghm">Top 50 Problems on Recursion</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-20-greedy-algorithms-interview-questions/?ref=ghm">Top 20 Greedy Algorithms Interview Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-50-dynamic-programming-coding-problems-for-interviews/?ref=ghm">Top 50 Dynamic Programming (DP) Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-20-hashing-technique-based-interview-questions/?ref=ghm">Top 20 Hashing Technique based Interview Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-20-dynamic-programming-interview-questions/?ref=ghm">Top 20 Dynamic Programming Interview Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-10-algorithms-in-interview-questions/?ref=ghm">Top 10 algorithms in Interview Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/commonly-asked-data-structure-interview-questions-set-1/?ref=ghm">Commonly Asked Data Structure Interview Questions</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Puzzles
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/puzzles/?ref=ghm">All Puzzles</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-100-puzzles-asked-in-interviews/?ref=ghm">Top 100 Puzzles Asked In Interviews</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-20-puzzles-commonly-asked-during-sde-interviews/?ref=ghm">Top 20 Puzzles Commonly Asked During SDE Interviews</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-mcqs-on-puzzles-with-answers/?ref=ghm">Top MCQs on Puzzles with Answers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/tag/crossword-of-the-week/?ref=ghm">Crossword Puzzle Of The Week</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>System Design
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/complete-roadmap-to-learn-system-design/?ref=ghm">System Design Roadmap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/?ref=ghm">Top 10 System Design Interview Questions and Answers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>System Design Tutorial
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/what-is-system-design-learn-system-design/?ref=ghm">What is System Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-key-concepts-and-terminologies-learn-system-design/?ref=ghm">Key Terminologies in System Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/analysis-of-monolithic-and-distributed-systems-learn-system-design/?ref=ghm">Analysis and Architecture of Systems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/what-is-scalability-and-how-to-achieve-it-learn-system-design/?ref=ghm">Scalability in System Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/complete-reference-to-databases-in-designing-systems/?ref=ghm">Databases in System Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/what-is-high-level-design-learn-system-design/?ref=ghm">High Level Design or HLD</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/what-is-low-level-design-or-lld-learn-system-design/?ref=ghm">Low Level Design or LLD</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/communication-protocols-in-system-design/?ref=ghm">Communication Protocols</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/web-server-proxies-and-their-role-in-designing-systems/?ref=ghm">Web Servers and Proxies</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/top-10-system-design-interview-questions-and-answers/?ref=ghm">Case Studies in Designing Systems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/system-design-tutorial/?ref=ghm">Complete System Design Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Software Design Patterns
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/design-patterns-set-1-introduction/?ref=ghm">Factory Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/observer-pattern-set-1-introduction/?ref=ghm">Observer Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/singleton-design-pattern/?ref=ghm">Singleton Design Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/decorator-pattern/?ref=ghm">Decorator Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/strategy-pattern-set-1/?ref=ghm">Strategy Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/adapter-pattern/?ref=ghm">Adapter Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/command-pattern/?ref=ghm">Command Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/iterator-pattern/?ref=ghm">Iterator Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/prototype-design-pattern/?ref=ghm">Prototype Design Pattern</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/software-design-patterns/?ref=ghm">All Design Patterns</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Interview Corner
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/company-preparation/?ref=ghm">Company Preparation</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/interview-preparation-for-software-developer/?ref=ghm">Top Topics</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/company-tags/">Practice Company Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/company-interview-corner/?ref=ghm">Interview Experiences</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/experienced-interview-experiences-company-wise/?ref=ghm">Experienced Interviews</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/internship-interview-experiences-company-wise/?ref=ghm">Internship Interviews</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm">Competitive Programming</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/quiz-corner-gq/?ref=ghm">Multiple Choice Quizzes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/aptitude-questions-and-answers/?ref=ghm">Aptitude for Placements</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Languages
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/c-programming-language/?ref=ghm">C</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/c-plus-plus/?ref=ghm">C++</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/java/?ref=ghm">Java</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-programming-language/?ref=ghm">Python</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=ghm">JavaScript</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/php-tutorials/?ref=ghm">PHP</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/r-tutorial/">R Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/csharp-programming-language/?ref=ghm">C#</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sql-tutorial/?ref=ghm">SQL</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/scala-programming-language/?ref=ghm">Scala</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/perl-programming-language/?ref=ghm">Perl</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/golang/?ref=ghm">Go Language</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/kotlin-programming-language/?ref=ghm">Kotlin</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Web Development
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/html-tutorials/?ref=ghm">HTML</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/css-tutorials/?ref=ghm">CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=ghm">JavaScript</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/php-tutorials/?ref=ghm">PHP</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/wordpress/?ref=ghm">WordPress</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/json/?ref=ghm">JSON</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CSS Frameworks
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/bootstrap/?ref=ghm">Bootstrap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/tailwind-css/?ref=ghm">Tailwind CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/foundation/?ref=ghm">Foundation CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/materialize-css/?ref=ghm">Materialize CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/bulma/?ref=ghm">Bulma</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/pure-css/?ref=ghm">Pure CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/primer-css/?ref=ghm">Primer CSS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/blaze-ui/?ref=ghm">Blaze UI</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/semantic-ui/?ref=ghm">Semantic UI</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>JavaScript Frameworks
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/angularjs/?ref=ghm">AngularJS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/angular-primeng/?ref=ghm">Angular PrimeNG</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/angular-ngx-bootstrap/?ref=ghm">Angular ngx Bootstrap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/nodejs/?ref=ghm">NodeJS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/express-js/?ref=ghm">Express.js</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>JavaScript Libraries
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jquery-tutorials/?ref=ghm">jQuery</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jquery-mobile/?ref=ghm">jQuery Mobile</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jquery-ui/?ref=ghm">jQuery UI</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jquery-easyui/?ref=ghm">jQuery EasyUI</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jqwidgets/?ref=ghm">jQWidgets</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/learn-reactjs/?ref=ghm">ReactJS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/react-bootstrap/?ref=ghm">React Bootstrap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/react-rebass/?ref=ghm">React Rebass</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/react-desktop/?ref=ghm">React Desktop</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/react-suite/?ref=ghm">React Suite</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/reactjs-evergreen/?ref=ghm">ReactJS Evergreen</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/reactjs-reactstrap/?ref=ghm">ReactJS Reactstrap</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ant-design/?ref=ghm">Ant Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/blueprintjs/?ref=ghm">BlueprintJS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/p5-js/?ref=ghm">p5.js</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/lodash/?ref=ghm">Lodash</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/tensorflow-js/?ref=ghm">TensorFlow.js</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/moment-js/?ref=ghm">Moment.js</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/collect-js/?ref=ghm">Collect.js</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Web Dev Cheat Sheets
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/html-cheat-sheet-a-basic-guide-to-html/?ref=ghm">HTML Cheat Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/css-cheat-sheet-a-basic-guide-to-css/?ref=ghm">CSS Cheat Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/bootstrap-cheatsheet-a-basic-guide-to-bootstrap/?ref=ghm">Bootstrap Cheat Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/javascript-cheat-sheet-a-basic-guide-to-javascript/?ref=ghm">JS Cheat Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jquery-cheat-sheet-a-basic-guide-to-jquery/?ref=ghm">jQuery Cheat Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/angular-cheat-sheet-a-basic-guide-to-angular/?ref=ghm">Angular Cheat Sheet</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>ML &amp; Data Science
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-science-tutorial/">Data Science using Python</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/r-programming-for-data-science/">Data Science using R</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/natural-language-processing-nlp-tutorial/">NLP Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/opencv-python-tutorial/">OpenCV Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Machine Learning
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/machine-learning/">ML Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/machine-learning-mathematics/">ML Maths</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/machine-learning-projects/">ML Projects</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Science Packages
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/pandas-tutorial/">Pandas Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/numpy-tutorial/">NumPy Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Data Visualization
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Visualization with Python
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-data-visualization-tutorial/">Python Data Visualization Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/matplotlib-tutorial/">Matplotlib Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-bokeh-tutorial-interactive-data-visualization-with-bokeh/">Bokeh Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-plotly-tutorial/">Plotly Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-seaborn-tutorial/">Seaborn Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Visualization with R
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-visualization-in-r/">Data Visualization with R</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/getting-started-with-plotly-in-r/">Plotly Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-visualization-with-r-and-ggplot2/">ggplot Tutorial</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Visualization Tools
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/tableau-tutorial/">Tableau</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/power-bi-tutorial/">Power BI</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Data Analysis
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-analysis-with-python/">Data Analysis with Python</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/data-analysis-using-r/">Data Analysis with R</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Deep Learning
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/deep-learning-tutorial/">Deep Learning Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/5-deep-learning-project-ideas-for-beginners/">Deep Learning Projects</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Interview Questions
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/machine-learning-interview-questions/">Machine Learning Interview Question</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/deep-learning-interview-questions/">Deep Learning Interview Question</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/python-interview-questions/">Python Interview Questions</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/r-interview-questions/">Top 50 R Interview Questions</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>ML Frameworks
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/introduction-to-tensorflow/">Tensorflow</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/getting-started-with-pytorch/">PyTorch</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/understanding-pytorch-lightning-datamodules/">PyTorch Lightning</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CS Subjects
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/engineering-mathematics-tutorials/?ref=ghm">Mathematics</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/operating-systems/?ref=ghm">Operating System</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/dbms/?ref=ghm">DBMS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/computer-network-tutorials/?ref=ghm">Computer Networks</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/computer-organization-and-architecture-tutorials/?ref=ghm">Computer Organization and Architecture</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/theory-of-computation-automata-tutorials/?ref=ghm">Theory of Computation</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/compiler-design-tutorials/?ref=ghm">Compiler Design</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/digital-electronics-logic-design-tutorials/#blg/?ref=ghm">Digital Logic</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/software-engineering/?ref=ghm">Software Engineering</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>DevOps
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/git-tutorial/?ref=ghm">GIT</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/aws-tutorial/?ref=ghm">AWS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/docker-tutorial/?ref=ghm">Docker</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/kubernetes-tutorial/?ref=ghm">Kubernetes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/microsoft-azure/?ref=ghm">Microsoft Azure Tutorial</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/google-cloud-platform-tutorial/?ref=ghm">Google Cloud Platform</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>School Learning
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/english-grammar/?ref=ghm">English Grammar</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/school-learning/?ref=ghm">School Programming</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Mathematics
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/number-system-and-arithmetic/?ref=ghm">Number System</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/algebra/?ref=ghm">Algebra</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/trigonometry/?ref=ghm">Trigonometry</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/statistics/?ref=ghm">Statistics</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/probability-in-maths/?ref=ghm">Probability</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/geometry/?ref=ghm">Geometry</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/mensuration/?ref=ghm">Mensuration</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/calculus/?ref=ghm">Calculus</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CBSE Syllabus 
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-syllabus/?ref=ghm">className 8 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-syllabus/?ref=ghm">className 9 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-syllabus/?ref=ghm">className 10 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-syllabus/?ref=ghm">className 11 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-syllabus/?ref=ghm">className 12 Syllabus</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Maths Notes (className 8-12)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-maths-notes/?ref=ghm">className 8 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-maths-notes/?ref=ghm">className 9 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-maths-notes/?ref=ghm">className 10 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-maths-notes/?ref=ghm">className 11 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-maths-notes/?ref=ghm">className 12 Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Maths Formulas (className 8 -11)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-maths-formulas/?ref=ghm">className 8 Formulas</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-maths-formulas/?ref=ghm">className 9 Formulas</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-maths-formulas/?ref=ghm">className 10 Formulas</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-maths-formulas/?ref=ghm">className 11 Formulas</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>NCERT Solutions
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-8-maths/?ref=ghm">className 8 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-9-maths/?ref=ghm">className 9 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-10-maths/?ref=ghm">className 10 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-11-maths/?ref=ghm">className 11 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ncert-solutions-for-className-12-maths/?ref=ghm">className 12 Maths Solution</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>RD Sharma Solutions
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/rd-sharma-className-8-solutions-for-maths/?ref=ghm">className 8 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/rd-sharma-className-9-solutions/?ref=ghm">className 9 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/rd-sharma-className-10-solutions/?ref=ghm">className 10 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/rd-sharma-className-11-solutions-for-maths/?ref=ghm">className 11 Maths Solution</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/rd-sharma-className-12-solutions-for-maths/?ref=ghm">className 12 Maths Solution</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Science Notes
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-8-science-notes/?ref=ghm">className 8 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-9-science-revision-notes/?ref=ghm">className 9 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-10-science-notes/?ref=ghm">className 10 Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Physics Notes (className 8-12)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-physics-className-8-notes/?ref=ghm">className 8 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-physics-notes/?ref=ghm">className 9 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-notes-for-className-10-physics/?ref=ghm">className 10 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-physics-notes/?ref=ghm">className 11 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-notes-className-12-physics/?ref=ghm">className 12 Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Chemistry Notes (className 8-12)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-chemistry-notes/?ref=ghm">className 8 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-chemistry-notes/?ref=ghm">className 9 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-chemistry-notes/?ref=ghm">className 10 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-notes-className-11-chemistry/?ref=ghm">className 11 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-notes-className-12-chemistry/?ref=ghm">className 12 Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Biology Notes
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-biology-syllabus/?ref=ghm">className 8</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-9-biology-syllabus/?ref=ghm">className 9</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-10-biology-syllabus/?ref=ghm">className 10</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-biology-notes/?ref=ghm">className 11</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Social Science Syllabus 
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-7-social-science/?ref=ghm">className 7 SS Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-8-social-science/?ref=ghm">className 8 SS Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-syllabus-for-className-9-social-science/?ref=ghm">className 9 SS Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-social-science-syllabus/?ref=ghm">className 10 SS Syllabus</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Social Science Notes
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>SS Notes (className 7-12)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-7-social-science-notes/?ref=ghm">className 7 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-civics-notes/?ref=ghm">className 8 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-9-social-science-revision-notes/?ref=ghm">className 9 Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-10-social-science-notes/?ref=ghm">className 10 Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CBSE History Notes (className 7-10)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-7-social-science-history/?ref=ghm">History className 7</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-history-notes/?ref=ghm">History className 8</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-9-social-science-history-notes/?ref=ghm">History className 9</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CBSE Geography Notes (className 7-10)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-7-geography-notes/?ref=ghm">Geo. className 7</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-8-social-science-geography/?ref=ghm">Geo. className 8</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/className-9-social-science-geography-notes/?ref=ghm">Geo. className 9</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CBSE Civics Notes (className 7-10)
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-7-civics-notes/?ref=ghm">Civics className 7</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-8-social-science-civics-notes/?ref=ghm">Civics className 8</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>CBSE Previous Year Papers
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-maths-previous-year-paper-2022/?ref=ghm">Maths</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-physics/?ref=ghm">Physics</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-history/?ref=ghm">History</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-previous-year-question-paper-className-12-geography/?ref=ghm">Georgraphy</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-political-science/?ref=ghm">Political Science</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-previous-year-question-papers-className-12-economics/?ref=ghm">Economics</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Commerce
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-business-studies-notes/?ref=ghm">Business Studies (className 11th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-accountancy-notes/?ref=ghm">Accountancy (className 11th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-microeconomics-notes/?ref=ghm">Microeconomics (className 11th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-11-statistics-for-economics-notes/?ref=ghm">Statistics for Economics (className 11th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-business-studies-notes/?ref=ghm">Business Studies (className 12th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-accountancy-notes/?ref=ghm">Accountancy (className 12th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/cbse-className-12-macroeconomics-notes/?ref=ghm">Macroeconomics (className 12th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/indian-economic-development/?ref=ghm">Indian Economic Development (className 12th)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/management/?ref=ghm">Management</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/income-tax/?ref=ghm">Income Tax</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/finance/?ref=ghm">Finance</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>GATE
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/courses/gate-live-course?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=courses">GATE 2024 Live Course</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/gate-cs-notes-gq/?ref=ghm">GATE Computer Science Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/lmns-gq/?ref=ghm">Last Minute Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/gate-corner-2-gq/?ref=ghm">GATE CS Solved Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/original-gate-previous-year-question-papers-cse-and-it-gq/?ref=ghm">GATE CS Original Papers and Official Keys</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/gate-cse-syllabus-2023/?ref=ghm">GATE CS 2023 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-prepare-gate-2020-computer-science-paper/?ref=ghm">Important Topics for GATE CS</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/gate-2023-exam-dates/?ref=ghm">GATE 2023 Important Dates</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Other CS Exams
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>ISRO
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/isro-original-papers-official-keys/?ref=ghm">ISRO CS Original Papers and Official Keys</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/isro-cs-preparation/?ref=ghm">ISRO CS Solved Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/isro-cse-syllabus-scientistengineer-exam-2018/?ref=ghm">ISRO CS Syllabus for Scientist/Engineer Exam</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>UGC NET
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ugc-net-cs-notes-according-to-syllabus-of-paper-ii/?ref=ghm">UGC NET CS Notes Paper II</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ugc-net-cs-notes-according-to-syllabus-of-paper-iii-core-group/?ref=ghm">UGC NET CS Notes Paper III</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ugc-net-cs-preparation/?ref=ghm">UGC NET CS Solved Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>UPSC Study Material
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-of-geography-for-upsc/?ref=ghm">Geography Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-of-science-and-technology-for-upsc/?ref=ghm">Science &amp; Tech. Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-in-ethics-for-upsc/?ref=ghm">Ethics Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-in-polity-for-upsc/?ref=ghm">Polity Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-in-economics-for-upsc/?ref=ghm">Economics Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/list-of-important-government-schemes-in-india/?ref=ghm">Government Schemes (Updated)</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/upsc-previous-year-papers/?ref=ghm">UPSC Previous Year Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>History Notes
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/modern-indian-history-notes-upsc/?ref=ghm">Modern Indian History Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/medieval-history-notes-upsc/?ref=ghm">Medieval Indian History Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ancient-history-notes-upsc/?ref=ghm">Ancient Indian History Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/important-topics-of-history-for-upsc/?ref=ghm">Complete History Notes</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Student
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/campus-ambassador-program-by-geeksforgeeks/?ref=ghm">Campus Ambassador Program</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/school-ambassador/?ref=ghm">School Ambassador Program</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/computer-science-projects/?ref=ghm">Project</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/geek-of-the-month/?ref=ghm">Geek of the Month</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/campus-geek-of-the-month/?ref=ghm">Campus Geek of the Month</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/placements-gq/?ref=ghm">Placement Course</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/competitive-programming-a-complete-guide/?ref=ghm">Competitive Programming</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/testimonials/?ref=ghm">Testimonials</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/geeksforgeeks-student-chapter/?ref=ghm">Student Chapter</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/category/geek-on-the-top/?ref=ghm">Geek on the Top</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/internship/?ref=ghm">Internship</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/careers/?ref=ghm">Careers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>SSC CGL Study Material
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-cgl-syllabus-2022/?ref=ghm">SSC CGL Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-cgl-general-studies-syllabus/?ref=ghm">General Studies</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-cgl-english-syllabus/?ref=ghm">English</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-reasoning-syllabus/?ref=ghm">Reasoning</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-cgl-practice-papers/?ref=ghm">Subjectwise Practice Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ssc-cgl-previous-year-papers/?ref=ghm">Previous Year Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Banking Exams Study Material
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>SBI Clerk
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-syllabus-2022/?ref=ghm">SBI Clerk Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-general-awareness-syllabus/?ref=ghm">General Awareness</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-english-syllabus-2022/?ref=ghm">English</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-quantitative-aptitude-syllabus-2022/?ref=ghm">Quantitative Aptitude</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-reasoning-ability-syllabus/?ref=ghm">Reasoning Ability</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-clerk-practice-papers/?ref=ghm">SBI Clerk Practice Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>SBI PO
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-syllabus-2022/?ref=ghm">SBI PO Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-general-awareness-2022/?ref=ghm">General Awareness</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-english-syllabus/?ref=ghm">English</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-quantitative-aptitude-2022/?ref=ghm">Quantitative Aptitude</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-reasoning-syllabus/?ref=ghm">Reasoning Ability</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-previous-year-papers/?ref=ghm">Previous Year Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/sbi-po-practice-papers/?ref=ghm">SBI PO Practice Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>IBPS PO
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/syllabus-of-ibps-po-2022/?ref=ghm">IBPS PO 2022 Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ibps-po-english-syllabus/?ref=ghm">English Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/reasoning-syllabus-for-ibps-po/?ref=ghm">Reasoning Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ibps-po-previous-year-papers/?ref=ghm">Previous Year Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ibps-po-mock-question-paper-2022/?ref=ghm">Mock Question Papers</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/general-awareness-for-ibps-po-bank-exam/?ref=ghm">General Awareness</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>IBPS Clerk
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/detailed-syllabus-of-ibps-clerk/?ref=ghm">IBPS Clerk Syllabus</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/english-syllabus-of-ibps-clerk-exam/?ref=ghm">English Notes</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/ibps-clerk-previous-year-question-papers/?ref=ghm">Previous Year Papers</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>For Job Seekers
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/jobs">Get Hired: Apply for Jobs</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/events/rec/job-a-thon?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=jobs">Job-a-thon: Hiring Challenge</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>For Recruiters
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/hire-with-us/dashboard">Recruiter Dashboard</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://www.geeksforgeeks.org/job-a-thon/">Corporate Hiring Solutions</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Curated DSA Lists
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=8&amp;sortBy=submissions&amp;curated_names[]=Beginner%27s%20DSA%20Sheet&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Beginner's DSA Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=7&amp;sortBy=submissions&amp;curated_names[]=Love%20Babbar%20Sheet&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Love Babbar Sheet</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=2&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Array%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Top 50 Array Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=3&amp;curated[]=3&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20String%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Top 50 String Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=6&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Tree%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Top 50 Tree Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=5&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20Graph%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Top 50 Graph Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=4&amp;sortBy=submissions&amp;curated_names[]=Top%2050%20DP%20Problems&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Top 50 DP Problems</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Tutorials
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="false" aria-expanded="false">
                          <span>Jobs
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Practice
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;sortBy=submissions&amp;utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header">All DSA Problems</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/problem-of-the-day?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header">Problem of the Day</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/explore?page=1&amp;curated[]=1&amp;sortBy=submissions&amp;curated_names[]=SDE%20Sheet?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=practice_header">GFG SDE Sheet</a>
                             </li>
                          </ul>
                       </li>
                       <li className="header-sidebar__list-item" data-expandable="true" aria-expanded="false">
                          <span>Contests
                          <i className="gfg-icon gfg-icon_arrow-down"></i>
                          </span>
                          <ul className="mega-dropdown">
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/events/rec/interview-series?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests">GFG Weekly Coding Contest</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/events/rec/job-a-thon?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests">Job-A-Thon: Hiring Challenge</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/events/rec/step-up-coding-school?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests">BiWizard School Contest</a>
                             </li>
                             <li className="mega-dropdown__list-item">
                                <a href="https://practice.geeksforgeeks.org/events?utm_source=geeksforgeeks&amp;utm_medium=main_header&amp;utm_campaign=contests">All Contests and Events</a>
                             </li>
                          </ul>
                       </li>
                    </ul>
                 </li>
                 <li className="header-sidebar__list-item"><a href="https://www.geeksforgeeks.org/category/guestblogs/?ref=ghm" target="_self">GBlog</a></li>
                 <li className="header-sidebar__list-item"><a href="https://www.geeksforgeeks.org/puzzles/?ref=ghm" target="_self">Puzzles</a></li>
                 <li className="header-sidebar__list-item"><a href="https://www.geeksforgeeks.org/geeks-classNamees-geeksforgeeks/?ref=ghm" target="_self">What's New ?</a></li>
              </ul>
              <div className="mobile_translate">
                 <div id="google_translate_mobile" data-show="false"></div>
                 <div style={{margin:'auto'}}><button className="toggle-darkMode" data-gfg-action="toggleGFGTheme">
                    <i className="gfg-icon gfg-icon_dark-mode"></i></button>
                    <button className="google_translate_element_mobile" data-gfg-action="google_translate_mobile" aria-expanded="false" data-expanded="true">
                    <i className="gfg-icon gfg-icon_translate googleTranslateToggleMobile"></i>Change Language</button>
                 </div>
              </div>
              <div style={{height:'80px'}}></div>
           </div>
    </div>
    <div className="header-main__slider">
           <button className="header-main__slider-arrow previous">
           <i className="gfg-icon gfg-icon_arrow-left gicon-centered"></i></button>
           <ul id="hslider">
              <li><a href="https://www.geeksforgeeks.org/trending/?ref=shm">Trending Now</a></li>
              <li><a href="https://www.geeksforgeeks.org/learn-data-structures-and-algorithms-dsa-tutorial/?ref=shm">DSA</a></li>
              <li><a href="https://www.geeksforgeeks.org/data-structures/?ref=shm">Data Structures</a></li>
              <li><a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/?ref=shm">Algorithms</a></li>
              <li><a href="https://practice.geeksforgeeks.org/courses/complete-interview-preparation?utm_source=gfg_submenu&amp;utm_medium=Home&amp;utm_campaign=CIP_Submenu/">Interview Preparation</a></li>
              <li><a href="https://practice.geeksforgeeks.org/courses/data-science-live?utm_source=GfG&amp;utm_medium=gfg_submenu&amp;utm_campaign=DS_Submenu/">Data Science</a></li>
              <li><a href="https://practice.geeksforgeeks.org/explore?page=1&amp;sortBy=submissions">Topic-wise Practice</a></li>
              <li><a href="https://www.geeksforgeeks.org/python-programming-language/?ref=shm">Python</a></li>
              <li><a href="https://www.geeksforgeeks.org/machine-learning/?ref=shm">Machine Learning</a></li>
              <li><a href="https://www.geeksforgeeks.org/learn-javascript-js-roadmap-for-beginners/?ref=shm">JavaScript</a></li>
              <li><a href="https://www.geeksforgeeks.org/java/?ref=shm">Java</a></li>
              <li><a href="https://www.geeksforgeeks.org/c-programming-language/?ref=shm">C</a></li>
              <li><a href="https://www.geeksforgeeks.org/c-plus-plus/?ref=shm">C++</a></li>
              <li><a href="https://www.geeksforgeeks.org/learn-reactjs/?ref=shm">ReactJS</a></li>
              <li><a href="https://www.geeksforgeeks.org/css/?ref=shm">CSS</a></li>
              <li><a href="https://practice.geeksforgeeks.org/courses/competitive-programming-live?utm_source=GfG&amp;utm_medium=gfg_submenu&amp;utm_campaign=DS_Submenu/">Competitive Programming</a></li>
              <li><a href="https://www.geeksforgeeks.org/aptitude-questions-and-answers/?ref=shm">Aptitude</a></li>
              <li><a href="https://www.geeksforgeeks.org/web-development/?ref=shm">Web Development</a></li>
              <li><a href="https://www.geeksforgeeks.org/puzzles/?ref=shm">Puzzles</a></li>
              <li><a href="https://www.geeksforgeeks.org/computer-science-projects?ref=shm">Projects</a></li>
           </ul>
           <button className="header-main__slider-arrow next">
           <i className="gfg-icon gfg-icon_arrow-right gicon-centered"></i></button>
    </div>
    <div className="wrapper">
           <div className="sidebar_wrapper">
              <div className="sideBar sideBar-page">
                 <div className="sideBar--wrap">
                    <ul className="leftBarList">
                       <li style={{backgroundColor:'#f0f3f5!important'}}><a href="https://write.geeksforgeeks.org/posts-new?interview-experience&amp;ref=GLBIE" style={{color:'#000!important'}}>Write an Interview Experience</a></li>
                       <li style={{backgroundColor: '#caf8ff!important'}}><a href="https://www.geeksforgeeks.org/write-it-up-event-2023-share-your-experiences-on-geeksforgeeks/?ref=leftbar_optimize" style={{color:'#000 !important',fontWeight: 'bolder'}}>Get published on GeeksforGeeks!<br/>Join Write It Up.</a></li>
                       <li className="currentpage"><a href="https://www.geeksforgeeks.org/data-structures/?ref=lbp">Data Structures</a></li>
                       <li><a href="https://www.geeksforgeeks.org/introduction-to-data-structures/?ref=lbp">Introduction to Data Structures</a></li>
                       <li><a href="https://www.geeksforgeeks.org/what-is-data-structure-types-classNameifications-and-applications/?ref=lbp">Data Structure Types, classNameifications and Applications</a></li>
                       <div className="leftbar-dropdown">
                          <div className="dropdown-title">Overview of Data Structures<span className="gfg-icon gfg-icon_arrow-down-thin"></span></div>
                          <ul style={{display:'none'}}>
                             <li><a href="https://www.geeksforgeeks.org/introduction-to-linear-data-structures/?ref=lbp">Introduction to Linear Data Structures</a></li>
                             <li><a href="https://www.geeksforgeeks.org/introduction-to-hierarchical-data-structure/?ref=lbp">Introduction to Hierarchical Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/overview-of-graph-trie-segment-tree-and-suffix-tree-data-structures/?ref=lbp">Overview of Graph, Trie, Segment Tree and Suffix Tree Data Structures</a></li>
                          </ul>
                       </div>
                       <div className="leftbar-dropdown">
                          <div className="dropdown-title">Different Types of Data Structures<span className="gfg-icon gfg-icon_arrow-down-thin">
                             </span>
                          </div>
                          <ul style={{display:'none'}}>
                             <li><a href="https://www.geeksforgeeks.org/array-data-structure/?ref=lbp">Array Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/string-data-structure/?ref=lbp">String Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/data-structures/linked-list/?ref=lbp">Linked List Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/stack-data-structure/?ref=lbp">Stack Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/queue-data-structure/?ref=lbp">Queue Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/introduction-to-tree-data-structure-and-algorithm-tutorials/?ref=lbp">Introduction to Tree – Data Structure and Algorithm Tutorials</a></li>
                             <li><a href="https://www.geeksforgeeks.org/heap-data-structure/?ref=lbp">Heap Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/hashing-data-structure/?ref=lbp">Hashing Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/?ref=lbp">Graph Data Structure And Algorithms</a></li>
                             <li><a href="https://www.geeksforgeeks.org/matrix/?ref=lbp">Matrix Data Structure</a></li>
                             <li><a href="https://www.geeksforgeeks.org/advanced-data-structures/?ref=lbp">Advanced Data Structures</a></li>
                          </ul>
                       </div>
                       <li><a href="https://www.geeksforgeeks.org/data-structure-alignment-how-data-is-arranged-and-accessed-in-computer-memory/?ref=lbp">Data Structure Alignment : How data is arranged and accessed in Computer Memory?</a></li>
                       <li><a href="https://www.geeksforgeeks.org/static-data-structure-vs-dynamic-data-structure/?ref=lbp">Static Data Structure vs Dynamic Data Structure</a></li>
                       <li><a href="https://www.geeksforgeeks.org/static-and-dynamic-data-structures-in-java-with-examples/?ref=lbp">Static and Dynamic data structures in Java with Examples</a></li>
                       <li><a href="https://www.geeksforgeeks.org/common-operations-on-various-data-structures/?ref=lbp">Common operations on various Data Structures</a></li>
                       <li><a href="https://www.geeksforgeeks.org/real-time-application-of-data-structures/?ref=lbp">Real-life Applications of Data Structures and Algorithms (DSA)</a></li>
                    </ul>
                 </div>
              </div>
              
           </div>
    </div>
    </>
  );
}

export default HeaderNav;