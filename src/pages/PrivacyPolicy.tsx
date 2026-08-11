import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "1. Who We Are",
    titleAr: "١. من نحن",
    titleKu: "١. ئێمە کێین",
    body: "Silxor, 801 Barton Springs Rd, Austin, TX 78704.\nContact: hello@silxor.com",
    bodyAr: "Silxor، 801 Barton Springs Rd, Austin, TX 78704.\nللتواصل: hello@silxor.com",
    bodyKu: "Silxor، 801 Barton Springs Rd, Austin, TX 78704.\nپەیوەندی: hello@silxor.com",
  },
  {
    title: "2. Information We Collect",
    titleAr: "٢. المعلومات التي نجمعها",
    titleKu: "٢. ئەو زانیارییانەی کۆیان دەکەینەوە",
    body: "When you submit our assessment request or contact form, we collect the information you provide: full name, organization, work email, optional phone number, service interest, timeline, and your project summary. We do not collect payment information on this site.",
    bodyAr: "عند إرسال طلب التقييم أو نموذج التواصل، نجمع المعلومات التي تقدمها: الاسم الكامل، والمؤسسة، والبريد الإلكتروني للعمل، ورقم الهاتف الاختياري، والخدمة المطلوبة، والجدول الزمني، وملخص المشروع. لا نجمع معلومات الدفع على هذا الموقع.",
    bodyKu: "کاتێک داواکاری هەڵسەنگاندن یان فۆڕمی پەیوەندی دەنێریت، ئەو زانیارییانە کۆدەکەینەوە کە خۆت پێمان دەدەیت: ناوی تەواو، دەزگا، ئیمەیڵی کار، ژمارەی تەلەفۆنی ئارەزوومەندانە، خزمەتگوزاری مەبەست، خشتەی کات و کورتەی پڕۆژەکەت. لەم ماڵپەڕەدا هیچ زانیاریی پارەدان کۆناکەینەوە.",
  },
  {
    title: "3. How Submissions Are Handled",
    titleAr: "٣. كيف تُعالج الطلبات",
    titleKu: "٣. چۆن مامەڵە لەگەڵ داواکارییەکان دەکرێت",
    body: "Unless a specific backend integration has been configured for this deployment, form submissions are not stored on a server. Instead, the form prepares an email containing your submitted details and asks you to send it to hello@silxor.com from your own email client. If an integration is configured, submissions are sent to that endpoint instead and this policy will be updated accordingly.",
    bodyAr: "ما لم يتم تهيئة تكامل خلفي محدد لهذا الإصدار، لا تُخزَّن الطلبات على أي خادم. بدلاً من ذلك، يجهّز النموذج رسالة بريد إلكتروني تتضمن بياناتك ويطلب منك إرسالها إلى hello@silxor.com من بريدك الخاص. وإذا تمت تهيئة تكامل، تُرسل الطلبات إلى تلك الوجهة وسيتم تحديث هذه السياسة تبعاً لذلك.",
    bodyKu: "ئەگەر سیستەمێکی تایبەتی وەرگرتن بۆ ئەم نەشرە ڕێک نەخرابێت، داواکارییەکان لەسەر هیچ سێرڤەرێک هەڵناگیرێن. لە جیاتی ئەوە، فۆڕمەکە ئیمەیڵێک ئامادە دەکات کە زانیارییەکانت لەخۆدەگرێت و داوات لێدەکات لە ئیمەیڵی خۆتەوە بۆ hello@silxor.com بینێریت. ئەگەر سیستەمی وەرگرتن ڕێک بخرێت، داواکارییەکان بۆ ئەو شوێنە دەنێردرێن و ئەم سیاسەتەش نوێ دەکرێتەوە.",
  },
  {
    title: "4. How We Use Your Data",
    titleAr: "٤. كيف نستخدم بياناتك",
    titleKu: "٤. چۆن داتاکەت بەکاردەهێنین",
    body: "Information you submit is used solely to respond to your assessment request or inquiry. We do not sell or share personal data with third parties for marketing purposes.",
    bodyAr: "تُستخدم المعلومات التي ترسلها حصراً للرد على طلب التقييم أو الاستفسار. لا نبيع البيانات الشخصية ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.",
    bodyKu: "ئەو زانیارییانەی دەینێریت تەنها بۆ وەڵامدانەوەی داواکاری هەڵسەنگاندن یان پرسیارەکەت بەکاردێن. داتای کەسی نافرۆشین و لەگەڵ لایەنی سێیەم بۆ مەبەستی بازاڕکردن هاوبەشی ناکەین.",
  },
  {
    title: "5. Analytics and Cookies",
    titleAr: "٥. التحليلات وملفات تعريف الارتباط",
    titleKu: "٥. شیکاری و کوکییەکان",
    body: "This site does not run analytics or tracking cookies by default. If analytics tooling is added in the future, this policy will be updated to describe what is collected and why.",
    bodyAr: "لا يشغّل هذا الموقع أدوات تحليلات أو ملفات تتبع بشكل افتراضي. وإذا أُضيفت أدوات تحليلات مستقبلاً، ستُحدَّث هذه السياسة لتوضيح ما يُجمع ولماذا.",
    bodyKu: "ئەم ماڵپەڕە بە بنەڕەت هیچ ئامرازێکی شیکاری یان کوکیی چاودێری بەکارناهێنێت. ئەگەر داهاتوو ئامرازی شیکاری زیاد بکرێت، ئەم سیاسەتە نوێ دەکرێتەوە بۆ ڕوونکردنەوەی ئەوەی چی کۆدەکرێتەوە و بۆچی.",
  },
  {
    title: "6. Your Rights",
    titleAr: "٦. حقوقك",
    titleKu: "٦. مافەکانت",
    body: "You may request access to, correction of, or deletion of personal data you have shared with us by contacting hello@silxor.com. We aim to respond within 30 days.",
    bodyAr: "يمكنك طلب الاطلاع على بياناتك الشخصية أو تصحيحها أو حذفها عبر التواصل مع hello@silxor.com. نسعى للرد خلال 30 يوماً.",
    bodyKu: "دەتوانیت داوای دەستڕاگەیشتن یان ڕاستکردنەوە یان سڕینەوەی ئەو داتا کەسییانە بکەیت کە لەگەڵمان هاوبەشت کردوون، لە ڕێگەی hello@silxor.com. هەوڵ دەدەین لە ماوەی ٣٠ ڕۆژدا وەڵام بدەینەوە.",
  },
  {
    title: "7. Contact",
    titleAr: "٧. التواصل",
    titleKu: "٧. پەیوەندی",
    body: "For all privacy inquiries: hello@silxor.com\nSilxor, 801 Barton Springs Rd, Austin, TX 78704",
    bodyAr: "لجميع استفسارات الخصوصية: hello@silxor.com\nSilxor، 801 Barton Springs Rd, Austin, TX 78704",
    bodyKu: "بۆ هەموو پرسیارەکانی تایبەتمەندێتی: hello@silxor.com\nSilxor، 801 Barton Springs Rd, Austin, TX 78704",
  },
];

const PrivacyPolicy = () => {

  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main">
        <section className="section-spacing" style={{ paddingTop: 120 }}>
          <div className="container-content" style={{ maxWidth: 720, margin: "0 auto" }}>
            <div className="section-eyebrow">{"LEGAL"}</div>
            <h1
              className="font-display font-[700]"
              style={{ fontSize: 42, lineHeight: 1.15, color: "#FFFFFF", marginBottom: 8 }}
            >
              {"Privacy Policy"}
            </h1>
            <p
              className="font-body font-[300]"
              style={{ fontSize: 13, color: "#B8BCC2", marginBottom: 48 }}
            >
              {"Last updated: March 2026"}
            </p>

            {sections.map((section, i) => (
              <div key={i} style={{ marginBottom: 40 }}>
                <h2
                  className="font-body font-[500]"
                  style={{ fontSize: 17, color: "#FFFFFF", marginBottom: 12 }}
                >
                  {section.title}
                </h2>
                <p
                  className="font-body font-[300]"
                  style={{
                    fontSize: 15,
                    color: "#B8BCC2",
                    lineHeight: 1.8,
                    whiteSpace: "pre-line",
                    textAlign: "start",
                  }}
                >
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
