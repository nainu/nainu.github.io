---
layout: post
title:  "org-mode spacemacs 에서 쓸 때 오류"
date:   "2019-03-14T09:00:00+09:00"
categories: emacs
---

org-mode 를 spacemacs version: 0.200.13 에서 projectile 안에서 사용할 때 에러가 나는 경우가 있다. (나는 100%)

이것[^1]과 동일한 에러다.

```
Error (use-package): org-projectile :config: Symbol's function definition is void: org-projectile-per-project
```

해결책은 아직 mainstream에 반영되지 않은 커밋 하나[^2]를 체리픽하는 것. 

```shell
$ git cherry-pick 6063466231ce5e209aacd2de612e53390a25c442
```

간단한 문서파일 충돌이 발생하던데 적당히 해결하면 된다.

조만간 spacemacs 버전이 올라가면 이 커밋 적용 없이 잘 동작할 것 같다.

[^1]: [Symbol's function definition is void: org-projectile-per-project #9374](https://github.com/syl20bnr/spacemacs/issues/9374)
[^2]: [Make `org-projectile` integration compatible with its new version](https://github.com/syl20bnr/spacemacs/commit/6063466231ce5e209aacd2de612e53390a25c442)
