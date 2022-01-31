const express = require("express");
const morgan = require("morgan");
const { Post } = require("./models");
// morgan : 서버로 들어온 요청과 응답을 기록해주는 middleware
const db = require("./models");

const app = express();

app.use(morgan("dev"));
// parameter를 통해, 정도를 선택할 수 있음
// 현재 개발용이기 때문에, ‘dev'로 설정

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// json형식으로 데이터를 주고 받고,
// 폼 형태의 요청을 처리하기 위해 사용
// extended : false로 설정할 경우, json 객체 안에 json객체를 넣을 수 없음

//모든 게시글을 생성 순서로 정렬하여 Front에 보내주는 router
app.get("/posts", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      order: [["createAt", "DESC"]],
    });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//Post 생성을 담당하는 router
app.post("/post", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { title: req.body.title },
    });
    if (post) {
      return res.status(403).send("이미 같은 제목의 게시글이 존재합니다.");
    }
    const new_post = await Post.create({
      title: req.body.title,
      content: req.body.content,
    });
    res.send("게시글 작성 완료!");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//Front에서 요청한 id의 Post를 보내주는 router
app.get("/post/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });
    if (!post) {
      return res.status(403).send("해당 게시글이 존재하지 않습니다");
    }
    res.json(post);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//Post 삭제를 담당하는 router
app.delete("/post/:id", async (req, res, next) => {
  try {
    await Post.destroy({
      where: { id: req.params.id },
    });
    res.send("게시글 삭제 완료!");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

//Post 수정을 담당하는 router
app.patch("/post/:id", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.id },
    });

    if (!post) {
      return res.status(403).send("해당 게시글이 존재하지 않습니다");
    }
    await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send("게시글 수정 완료!");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

db.sequelize
  .sync()
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res, next) => {
  res.send("Hi~");
});

app.listen(3065, () => {
  console.log("3065 port에서 서버 실행!");
});
