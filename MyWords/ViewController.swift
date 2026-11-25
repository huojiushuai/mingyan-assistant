import UIKit
import WebKit

final class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {

    private var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()

        view.backgroundColor = UIColor(red: 0.97, green: 0.96, blue: 0.98, alpha: 1.0)

        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []
        config.preferences.javaScriptCanOpenWindowsAutomatically = true

        webView = WKWebView(frame: view.bounds, configuration: config)
        webView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.bounces = false
        webView.scrollView.contentInsetAdjustmentBehavior = .never

        if #available(iOS 13.0, *) {
            webView.isOpaque = false
            webView.backgroundColor = .clear
            webView.scrollView.backgroundColor = .clear
        }

        view.addSubview(webView)

        loadLocalApp()
    }

    private func loadLocalApp() {
        guard let indexURL = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "www") else {
            let label = UILabel()
            label.text = "资源加载失败"
            label.textAlignment = .center
            label.frame = view.bounds
            view.addSubview(label)
            return
        }
        let root = indexURL.deletingLastPathComponent()
        webView.loadFileURL(indexURL, allowingReadAccessTo: root)
    }

    // MARK: - 外部链接一律交给系统浏览器（Safari）打开
    private func openInBrowser(_ url: URL) {
        if #available(iOS 10.0, *) {
            UIApplication.shared.open(url, options: [:], completionHandler: nil)
        } else {
            UIApplication.shared.openURL(url)
        }
    }

    private func isLocalFile(_ url: URL) -> Bool {
        return url.isFileURL
    }

    func webView(_ webView: WKWebView,
                 decidePolicyFor navigationAction: WKNavigationAction,
                 decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        guard let url = navigationAction.request.url else {
            decisionHandler(.allow)
            return
        }

        if isLocalFile(url) {
            decisionHandler(.allow)
            return
        }

        // 页面内的 http/https 入口：在系统浏览器里打开
        if url.scheme == "http" || url.scheme == "https" {
            openInBrowser(url)
            decisionHandler(.cancel)
            return
        }

        // 其它 scheme（mailto、tel、其它 App）也交给系统
        if UIApplication.shared.canOpenURL(url) {
            openInBrowser(url)
        }
        decisionHandler(.cancel)
    }

    // target=_blank / window.open
    func webView(_ webView: WKWebView,
                 createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction,
                 windowFeatures: WKWindowFeatures) -> WKWebView? {
        if let url = navigationAction.request.url {
            if isLocalFile(url) {
                webView.load(navigationAction.request)
            } else {
                openInBrowser(url)
            }
        }
        return nil
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        return .default
    }
}
