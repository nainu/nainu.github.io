---
layout: post
title:  ".git/info/exclude, .git/hooks/"
date:   "2018-05-06T18:00:00+09:00"
categories: git
---

## .git/info/exclude
`.gitignore` 를 쓰는 대신에 `.git/info/exclude` 를 써도 git 이 파일을 무시하도록 만들 수 있다.
사용법은 매우 단순해서 그냥 `.gitignore` 에 쓰던 것처럼 쓰면 된다.

{% highlight bash %}
$ cat .git/info/exclude
# git ls-files --others --exclude-from=.git/info/exclude
# Lines that start with '#' are comments.
# For a project mostly in C, the following would be a good set of
# exclude patterns (uncomment them if you want to use them):
# *.[oa]
# *~

/.elixir_ls
/start
/start_test

$
{%endhighlight%}

왜 굳이 `.gitignore` 를 쓰지 않고 `.git/info/exclude` 를 쓰는가?
둘은 무엇이 다른가?

아래 링크를 읽어보면 해답이 있다.

+ [Three ways of excluding files](http://365git.tumblr.com/post/519016351/three-ways-of-excluding-files
)

혹시 글이 없어질수도 있으니 세줄 요약 해둔다.

- Per Project: .gitignore file in the repository
- Per Repository: in .git/info/excludes
- Per Computer: through settings in ~/.gitconfig

## .git/hooks

여기 훅이 있다는 것을 알고는 있었다. 그리고 어떻게 동작하는지도 알고 있었는데 마침 `pre-push` 를 써먹을 곳을 찾았다. 너무나도 뻔하지만 매우 유용하다.

{% highlight bash %}
$ cat .git/hooks/pre-push
#!/bin/sh

mix format --check-formatted && mix credo -a

$
{%endhighlight%}

hook은 이름에 쓰인 대로 적당한 시점에 실행되고 exit code가 0이 아니면 그 뒤 동작을 실패하도록 한다.
여기서는 코드의 상태를 체크하고 push를 하지 못하도록 막는 역할이다.

`pre-push`는 코드를 고치는 것보다는, 체크만 하는 것이 좋겠다. 훅마다 해야 하는 작업을 잘 정의해 둘 필요가 있을 것 같다.
