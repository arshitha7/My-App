import useBlogStore from "../../../store/BlogDetails";
import SearchBar from "../../SearchBar";
import { AiOutlineCalendar } from "react-icons/ai";



export default function BlogDetailsPage() {
  const PopularPosts = [
    {
      image:
        "https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=612x612&w=0&k=20&c=EvWROZsfro1ghOVViXVj-tKS364-NeabwNNYkyvhxoY=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description: "How a Website Can Help Scale Your Small Business...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1322205588/photo/cropped-shot-of-three-young-businessmpeople-working-together-on-a-laptop-in-their-office-late.jpg?b=1&s=612x612&w=0&k=20&c=rIMVMkPV5kiP2vu0iMk_u4LyzKr1tG02L6wYTHX7yEQ=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description:
        "The Role of Software Development in Digital Transformation...",
      buttonLink: "/",
    },
    {
      image:
        "https://media.istockphoto.com/id/1434742171/photo/laptop-ppt-presentation-business-meeting-and-team-working-on-review-for-new-digital-website.jpg?b=1&s=612x612&w=0&k=20&c=6K9v0tIuP0MFKy9JF1e1IW-pqhnmpoLWTPP4MsGSOmg=",
      date: "Admin / August 15, 2022",
      title: "Making Peace With The Feast Or Famine Of Freelancing",
      description: "Top 5 Features Every E-Commerce Website Should Have...",
      buttonLink: "/",
    },
  ];

  const websiteContent = [
    {
      heading: "How a Website Can Help Scale Your Small Business",
      intro:
        "In today’s digital age, having an online presence is no longer a luxury; it’s a necessity. For small businesses, a well-designed website can be a powerful tool to enhance visibility, build credibility, and drive growth. If you’ve been wondering how a website can help scale your small business, this article is for you.",
      content: [
        {
          key: "increased_visibility",
          heading: "Increased Visibility",
          text: "A website acts as a virtual storefront that is accessible 24/7. With millions of people searching for products and services online, having a website ensures that your business is discoverable to a wider audience. Even if your business is local, a website helps you tap into a global market or reach neighboring cities where potential customers are searching for what you offer.",
        },
        {
          key: "builds_credibility",
          heading: "Builds Credibility",
          text: "In the digital world, first impressions matter. A professional website helps establish trust and legitimacy. It shows that you are serious about your business. Customers often compare businesses online, and without a website, you might lose credibility to competitors who have an established online presence.",
        },
        {
          key: "cost_effective_marketing",
          heading: "Cost-Effective Marketing",
          text: "Traditional marketing methods like print ads and billboards can be expensive. A website, combined with digital marketing strategies like SEO (Search Engine Optimization), content marketing, and social media, offers a more affordable and measurable way to promote your business. You can reach the right audience at the right time without exceeding your budget.",
        },
        {
          key: "showcase_products",
          heading: "Showcase Your Products or Services",
          text: "A website allows you to showcase your offerings in detail. With product descriptions, high-quality images, testimonials, and even demo videos, potential customers can get a clear idea of what you provide. This is especially important for small businesses that rely on demonstrating the value of their services or products.",
        },
        {
          key: "improves_engagement",
          heading: "Improves Customer Engagement",
          text: "A website makes it easy for customers to interact with your business. Features like contact forms, live chat, and FAQs improve communication and allow you to address customer queries instantly. Blogs, newsletters, and social media integrations also keep your audience engaged and informed about your latest updates and offerings.",
        },
        {
          key: "facilitates_ecommerce",
          heading: "Facilitates E-commerce",
          text: "For small businesses selling products, integrating an e-commerce platform into your website can open up a new revenue stream. Customers can browse and purchase directly from your site, making it convenient for them and profitable for you.",
        },
        {
          key: "data_insights",
          heading: "Data Insights for Better Decisions",
          text: "A website isn’t just about being online; it’s also about gathering valuable data. Tools like Google Analytics help you understand your audience’s behavior, preferences, and demographics. This data can guide your marketing strategies and product development, ensuring you make informed decisions.",
        },
        {
          key: "compete_with_larger_businesses",
          heading: "Compete with Larger Businesses",
          text: "A website levels the playing field, giving small businesses the chance to compete with larger enterprises. With the right design and strategy, your website can attract customers and provide a personalized experience that sets you apart from bigger players.",
        },
        {
          key: "supports_growth",
          heading: "Supports Growth and Scalability",
          text: "As your business grows, your website can grow with you. Whether you’re expanding your product line, targeting new markets, or offering additional services, your website can adapt to these changes, supporting your business at every stage.",
        },
        {
          key: "conclusion",
          heading: "In conclusion",
          text: "A website is more than just an online address—it’s a dynamic tool that can help scale your small business. From reaching a broader audience to improving customer engagement and increasing sales, the benefits of having a website are endless.",
        },
        {
          key: "call_to_action",
          text: "If you’re ready to take your small business to the next level, start by investing in a professionally designed website. It’s a step toward growth, visibility, and long-term success. Need help creating or optimizing your website? Contact us today, and let’s turn your vision into reality!",
        },
      ],
    },

    {
      heading: "The Role of Software Development in Digital Transformation",
      intro:
        "Digital transformation is becoming more than just a trend in today's rapidly changing business environment—it is a need. At the heart of this transformation lies software development, the backbone that powers technological advancement and innovation. From startups to multinational corporations, organizations leverage custom software solutions to enhance efficiency, improve customer experiences, and gain a competitive edge. But what exactly is the role of software development in driving digital transformation? Let’s explore.",
      content: [
        {
          key: "driving_innovation",
          heading: "Driving Innovation and Business Agility",
          text: "Software development provides the tools and frameworks necessary for businesses to innovate and adapt to changing market conditions. Custom-built applications allow organizations to experiment with new business models, streamline operations, and address unique challenges efficiently. Agile development methodologies ensure that businesses can pivot quickly in response to customer needs, market demands, or technological advancements. For instance, companies leveraging cloud-based software solutions can scale their operations up or down seamlessly, fostering agility and resilience.",
        },
        {
          key: "enhancing_customer_experiences",
          heading: "Enhancing Customer Experiences",
          text: "Customer experience is at the forefront of digital transformation, and software development plays a pivotal role in this domain. Through mobile apps, websites, and AI-driven chatbots, businesses can provide personalized, seamless, and real-time interactions with customers. Data-driven software solutions, such as CRM systems, enable organizations to understand customer behavior, preferences, and pain points, allowing for tailored services that build loyalty and satisfaction.",
        },
        {
          key: "automating_processes",
          heading: "Automating Processes and Boosting Efficiency",
          text: "Automation is a cornerstone of digital transformation, and software development brings it to life. By designing and implementing software tools that automate repetitive tasks, businesses can reduce human error, save time, and optimize resource utilization. For example, Robotic Process Automation (RPA) software can handle tasks like data entry, invoice processing, and customer support ticketing, freeing up employees to focus on higher-value activities.",
        },
        {
          key: "leveraging_data",
          heading: "Leveraging Data Analytics for Decision-Making",
          text: "Digital transformation thrives on data, and software development enables organizations to collect, analyze, and interpret vast amounts of information. With the rise of big data and advanced analytics tools, custom software solutions empower businesses to make informed, data-driven decisions. Whether it’s tracking user behavior through analytics platforms or leveraging predictive models to forecast trends, software development provides the backbone for harnessing the full potential of data.",
        },
        {
          key: "ensuring_security",
          heading: "Ensuring Security and Compliance",
          text: "In an increasingly digital world, cybersecurity and regulatory compliance are critical. Software developers design systems with robust security protocols, protecting sensitive data and ensuring adherence to industry standards and legal requirements. With the rise of threats such as ransomware and data breaches, secure software solutions are essential for safeguarding both business operations and customer trust.",
        },
        {
          key: "building_ecosystems",
          heading: "Building Ecosystems with Integration",
          text: "Modern businesses rely on a multitude of tools and platforms, from ERPs to marketing automation systems. Software development bridges the gaps between these systems, enabling seamless integration and the creation of cohesive digital ecosystems. For instance, APIs (Application Programming Interfaces) developed by software teams allow disparate systems to communicate and work together, fostering operational harmony and efficiency.",
        },
        {
          key: "conclusion",
          heading: "Conclusion",
          text: "The role of software development in digital transformation cannot be overstated. It is the engine that drives innovation, enhances customer experiences, automates processes, and ensures security—all while enabling businesses to adapt and thrive in a digital-first world. As organizations embark on their digital transformation journeys, partnering with skilled software developers and leveraging cutting-edge technologies will be paramount. By investing in robust software solutions, businesses can not only stay competitive but also set themselves apart as leaders in their industries.",
        },
        {
          key: "call_to_action",
          text: "Are you ready to take the next step in your digital transformation? Let’s build the future together. Need customized software solutions for your business? Contact us today and let’s create something extraordinary.",
        },
      ],
    },

    {
      heading: "Top 5 Features Every E-Commerce Website Should Have",
      intro:
        "In today's hyper-competitive digital landscape, a successful e-commerce website is more than just an online storefront. It needs to be a seamless and engaging experience for customers, driving conversions and building brand loyalty. To achieve this, your website must incorporate key features that enhance user experience and facilitate smooth transactions.Here are the top 5 features every e-commerce website should have",
      content: [
        {
          key: "user_friendly_navigation",
          heading: "User-Friendly Navigation",
          text1:
            "A clear and intuitive navigation structure is paramount. Customers should easily find what they're looking for, whether it's through categories, search bars, or filters.",
          text2:
            "Consider implementing a megamenu to display a wide range of products and subcategories in a visually appealing and organized manner.",
          text3:
            "Breadcrumbs provide a clear trail for users to navigate back through the website, improving user experience and reducing bounce rates.",
        },
        {
          key: "secure_checkout_process",
          heading: "Secure Checkout Process",
          text1:
            "Prioritize robust security measures like SSL encryption to safeguard customer data during transactions. Display security badges to build trust with visitors.",
          text2:
            "Offer a variety of secure payment gateways, including credit/debit cards, digital wallets (like PayPal, Apple Pay, Google Pay), and mobile payment options.",
          text3:
            "Allow customers to make purchases without creating an account for a faster and more convenient checkout experience.",
        },
        {
          key: "high_quality_product_images",
          heading: "High-Quality Product Images and Videos",
          text1:
            "Invest in high-resolution, professional product images from multiple angles. Use zoom functionality to allow customers to inspect details closely.",
          text2:
            "Incorporate product videos to showcase product features, demonstrations, and customer testimonials.",
          text3:
            "For certain products, offer 360-degree views to provide a more immersive experience.",
        },
        {
          key: "personalized_recommendations",
          heading: "Personalized Recommendations",
          text1:
            "Utilize AI and machine learning algorithms to personalize product recommendations based on customer browsing history, purchase history, and preferences.",
          text2:
            "Display personalized offers, discounts, and promotions based on customer behavior and demographics.",
          text3:
            "Segment customers based on their interests and purchase history to deliver highly targeted marketing messages.",
        },
        {
          key: "excellent_customer_support",
          heading: "Excellent Customer Support",
          text1:
            "Offer real-time assistance through live chat to answer customer inquiries and resolve issues promptly.",
          text2:
            "Create a comprehensive FAQ section to address common customer questions and concerns.",
          text3:
            "Make contact information easily accessible, including phone numbers, email addresses, and social media links.",
        },
        {
          key: "conclusion",
          heading: "In Conclusion",
          text1:
            "By incorporating these essential features into your e-commerce website, you can create a seamless and engaging customer experience.",
          text2: "Drive conversions and build a loyal customer base.",
          text3:
            "Continuous improvement and adaptation are key to staying competitive in the ever-evolving world of e-commerce.",
        },
      ],
    },
  ];

  const blogDetails = useBlogStore((state) => state.blogDetails);

  const currentBlog = websiteContent.find(
    (item) => item.heading === blogDetails.title
  );

  return (
    <div className="py-20 bg-white font-jost">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-5 mx-5 md:mx-10 items-start">
        <div className="col-span-4 bg-white p-8 rounded-lg flex flex-col space-y-6">
          <div>
            <img
              src={blogDetails.image}
              alt="Blog Detail"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="flex items-center space-x-2">
            <AiOutlineCalendar className="text-green-500 w-5 h-5" />
            <p className="text-gray-600 text-sm font-medium">
              {blogDetails.date}
            </p>
          </div>

          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {blogDetails.title}
            </h1>
          </div>

          <div className="mt-5">
            {currentBlog?.intro ? (
              <p className="text-base text-green-500 font-semibold mb-5">
                {currentBlog.intro}
              </p>
            ) : (
              <p className="text-gray-500">Intro content is not available.</p>
            )}

            <div className="space-y-5">
              {currentBlog?.content?.map((item) => (
                <div key={item.key} className="space-y-2">
                  <h2 className="font-semibold text-lg text-gray-800">
                    {item.heading}
                  </h2>
                  {item.text && <p className="text-gray-500 ">{item.text}</p>}

                  <div className="space-y-3">
                  {item.text1 &&  <p className="text-gray-500 "> {item.text1}</p>}
                  {item.text2 && <p className="text-gray-500 ">{item.text2}</p>}
                  {item.text3 && <p className="text-gray-500 ">{item.text3}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 p-10 border-l-2 border-green-500 bg-gray-50">
            <h1 className="font-semibold text-gray-700">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </h1>
          </div>
        </div>

        {/* Sidebar Section */}
        <aside className="col-span-2 bg-white p-6 rounded-lg ">
          {/* Search Bar */}
          <SearchBar />

          {/* Popular Posts Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Popular Posts
            </h1>
            <div className="mt-4 space-y-4">
              {PopularPosts?.map((data, i) => (
                <div
                  key={i}
                  className="grid grid-cols-3 gap-4 items-center border-b pb-3 last:border-none"
                >
                  {/* Image */}
                  <img
                    src={data.image}
                    alt={data.title}
                    className="w-full h-20 object-cover rounded-md col-span-1"
                  />
                  {/* Text Content */}
                  <div className="col-span-2">
                    <p className="text-xs text-gray-500">{data.date}</p>
                    <h3 className="text-sm font-semibold text-gray-700 line-clamp-2">
                      {data.description}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Category
            </h1>
            <div className="mt-4 space-y-3">
              {[
                "Business",
                "Privacy",
                "Technology",
                "Tips",
                "Uncategorized",
              ].map((category, i) => (
                <div key={i} className="flex items-center space-x-2">
                  {/* Green Square */}
                  <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                  {/* Category Text */}
                  <p className="text-xs font-semibold tracking-wider text-gray-700">
                    {category}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Tags Section */}
          <div className="mt-10">
            <h1 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
              Tags
            </h1>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                "IT",
                "Spale",
                "Games",
                "Fashion",
                "Travel",
                "Smart",
                "Marketing",
                "Tips",
              ].map((tag, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-white text-gray-500 text-xs text-center tracking-wider font-semibold rounded-full border border-gray-300 hover:bg-green-500 hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
