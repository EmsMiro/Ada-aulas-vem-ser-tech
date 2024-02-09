import "../postContainer/style.css";
import Avatar from "../avatar";

const Post = () => {
  const scrollToTop = () => {
    const articleP = document.querySelector(".article-p");
    articleP.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <article className="article-container">
      <div className="article-header">
        <h2 className="article-title">
          Generation Z Takes a Stand: Contemporary Protests Against Racism
        </h2>
        <Avatar id="author-img" />
        <h4 className="article-subtitle">
          By <u>Malcolm X</u> <time>Dec 11, 2023</time> 
        </h4>
      </div>

      <div className="article-p-container">
        <p className="article-p">
          In today's tumultuous socio-political landscape, a new wave of
          activism is sweeping across the globe, spearheaded by the younger
          generations, particularly descendants of the African diaspora. Fueled
          by a fervent desire for justice and equality, these impassioned
          individuals are rallying in the streets, cyberspace, and classrooms to
          confront the pervasive scourge of racism.
          <p>
            With the rise of social media platforms, the dissemination of
            information and mobilization of communities have never been more
            accessible. Hashtags like #BlackLivesMatter and
            #JusticeForGeorgeFloyd serve as digital rallying cries, galvanizing
            support and sparking crucial conversations on racial injustice.
            Moreover, online petitions and virtual protests amplify voices that
            might otherwise go unheard, empowering individuals to effect change
            from the comfort of their homes.
          </p>
          <p>
            However, it is on the streets where the heartbeat of this movement
            resonates most profoundly. Young activists, emboldened by the
            legacies of their predecessors, march in solidarity, demanding
            accountability from institutions and challenging systemic
            inequalities. Armed with placards bearing poignant messages and
            chants reverberating with righteous indignation, they refuse to be
            silenced or sidelined in the fight for racial equity.
          </p>{" "}
          These demonstrations transcend geographical boundaries, echoing the
          sentiments of marginalized communities worldwide. From the bustling
          streets of New York City to the historic avenues of Johannesburg, a
          unified call for justice reverberates, transcending linguistic,
          cultural, and national barriers. Through their collective action,
          these intrepid activists are not only demanding change but actively
          shaping the narrative of the future, one protest at a time.
          <p>
            In the face of adversity and opposition, the resolve of these young
            crusaders remains unwavering. Theirs is a generation unafraid to
            confront uncomfortable truths, dismantle oppressive systems, and
            envision a world where racial harmony reigns supreme. As they
            continue to march forward, undeterred by the daunting challenges
            ahead, one thing remains abundantly clear: the future of anti-racist
            activism burns brightly in the hands of the next generation.
          </p>
        </p>
        <button className="btn-up" onClick={scrollToTop} href="#article-p">
          Back to the begin
        </button>
      </div>
    </article>
  );
};

export default Post;
