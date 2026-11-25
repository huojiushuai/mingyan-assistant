# 名言助手 · iOS 工程（GitHub 自动打包 ipa）

这个仓库里放的是「名言助手」的完整 Xcode 工程。推到 GitHub 后，GitHub 会用自己的 macOS 机器自动帮你编译成 ipa，**你不需要有 Mac**。

---

## 一、先把文件传上 GitHub（3 分钟）

### 方法 1：网页上传（最简单）

1. 打开 github.com，登录 → 右上角 `+` → **New repository**
2. 仓库名随便填，比如 `mingyan-assistant`
3. 选 **Public**（免费额度不限）或 Private 都行 → **Create repository**
4. 在新仓库页面点 **uploading an existing file**
5. 把解压出来的这些**全部拖进去**（连文件夹一起拖）：
   - `MyWords.xcodeproj`（文件夹）
   - `MyWords`（文件夹）
   - `.github`（文件夹，里面有打包配置）
   - `README.md`
6. 下面填一句说明 → **Commit changes**

> ⚠️ 如果拖拽时 `.github` 文件夹没上去（有些系统会漏掉点开头的文件夹），用下面这个补法：
> 仓库页面 → **Add file** → **Create new file** → 文件名框里输入
> `.github/workflows/ios-ipa.yml`
> （输入 `/` 会自动建文件夹）→ 把本仓库里同名文件的**全部内容**粘进去 → Commit。

### 方法 2：GitHub Desktop / 命令行

```bash
cd 解压后的文件夹
git init
git add .
git commit -m "init"
git branch -M main
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

---

## 二、等它自动编译（3～5 分钟）

1. 进仓库 → 顶部点 **Actions** 标签
2. 左边选 **Build IPA** → 右边会有一条正在跑的记录（黄色小圆点转圈）
3. 等它变成 **绿色对勾**
4. 点进那次运行 → 页面最下面 **Artifacts** → 下载 **mingyan-ipa**
5. 解压那个 zip，里面就是 **`mingyan-unsigned.ipa`**

如果 Actions 页面提示需要开启，点一下同意（`I understand my workflows, go ahead and enable them`）即可。

---

## 三、这个 ipa 怎么装到 iPhone 上

GitHub 编出来的是**未签名 ipa**——苹果不允许未签名 App 直接安装，所以要在你电脑上用自己的 Apple ID 给它签一次名。**不需要 Mac，Windows 就行。**

### Windows：Sideloadly（免费，推荐）

1. 装 iTunes（要**苹果官网下载的桌面版**，不要 Microsoft Store 版），装好后打开一次
2. 下载安装 **Sideloadly**（sideloadly.io）
3. 手机用数据线连电脑，Sideloadly 里选你的设备
4. 把 `mingyan-unsigned.ipa` 拖进 **IPA** 那一栏
5. **Apple ID** 填你自己的 Apple ID（普通免费账号就行）
6. 点 **Start** → 输入 Apple ID 密码 → 手机会弹「信任」→ 同意
7. 装好后手机进 **设置 → 通用 → VPN与设备管理** → 信任你的开发者证书
8. 回桌面，打开「名言助手」✅

### Mac：Xcode 或 AltStore

- 直接双击 `MyWords.xcodeproj`，Signing 里选你的 Apple ID，选你的手机，⌘R 跑一遍就装上了
- 或者用 AltStore 装这个 ipa

> **免费 Apple ID 的限制**：签出来的 App **7 天过期**，到期重签一次即可（Sideloadly 再点一次 Start，几秒钟）。想长期不过期，需要苹果开发者账号（99 美元/年）。

---

## 四、想直接拿到「能装的签名 ipa」？（可选，需要开发者账号）

如果你有 Apple 开发者账号（个人 99 美元/年，或者公司/企业证书），把签名材料存进 GitHub，它就能直接导出已签名的 ipa，不用再本地签名。

仓库 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**，加这 4 个：

| Name | 值 |
|---|---|
| `P12_BASE64` | 你的证书 .p12 转成 base64 的字符串 |
| `P12_PASSWORD` | 导出 .p12 时设的密码 |
| `MOBILEPROVISION_BASE64` | 描述文件 .mobileprovision 转成 base64 |
| `APPLE_TEAM_ID` | 你的 Team ID（developer.apple.com 右上角能看到，10 位） |

可选再建一个：

| Name | 值 |
|---|---|
| `EXPORT_METHOD` | `development`（装自己设备）/ `ad-hoc`（装指定设备）/ `app-store`（上架）/ `enterprise`（企业分发） |

转 base64 的命令：

```bash
# macOS / Linux
base64 -i certificate.p12 | pbcopy          # macOS
base64 -w 0 certificate.p12                 # Linux，把输出复制走

# Windows PowerShell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("certificate.p12")) | Set-Clipboard
```

配好之后再跑一次 Actions，出来的就是**已签名 ipa**，可以直接 AirDrop / 网盘发给别人装（ad-hoc 只能装描述文件里登记过 UDID 的设备）。

---

## 五、常见问题

**Q：Actions 跑到一半红了怎么办？**
点开日志看是哪一步红的。最常见是：
- `No signing certificate` → 那是走了签名路线但 Secrets 没配全，删掉 Secrets 就是未签名路线
- `bundle identifier is not available` → 在 Actions 页面点 **Run workflow**，`bundle_id` 填一个没人用的，比如 `com.你的名字.mingyan2026`

**Q：为什么编出来的 ipa 装不上？**
未签名 ipa 本来就装不上，必须本地签（见第三节）。这不是打包失败。

**Q：免费额度够用吗？**
公开仓库跑 macOS 机器完全免费、不限次数。私有仓库每月有免费时长，macOS 机器按 10 倍计费，一次构建约 3 分钟 → 折合约 30 分钟额度，正常够跑几十次。

**Q：能改 App 名字 / 图标 / 联系方式吗？**
- 名字：`MyWords/Info.plist` 里 `CFBundleDisplayName`
- 图标：`MyWords/Assets.xcassets/AppIcon.appiconset/` 里换 `icon-1024.png`
- 页面内容：`MyWords/www/` 里的网页文件

改完 commit 一次，Actions 会自动重新打包。
