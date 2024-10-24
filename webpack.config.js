import Dotenv from "dotenv-webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";
import path from "path";

export default (env) => {
  const envFile = env.NODE_ENV ? `.env.${env.NODE_ENV}` : ".env.development";
  return {
    entry: {
      index: ["./src/js/index.js", "./src/css/index.scss"],
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve("dist"),
      publicPath: "/",
      libraryTarget: "umd",
      clean: true,
    },
    mode: env.NODE_ENV || "development",
    module: {
      rules: [
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          type: "javascript/auto",
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
          type: "asset",
        },
        {
          test: /\.scss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      alias: {
        "~": path.resolve("./src"),
      },
    },
    plugins: [
      new Dotenv({
        path: envFile,
      }),
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        filename: "index.html",
        chunks: ["index"],
      }),
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [{ from: path.resolve("src/assets"), to: "dist/assets" }],
      }),
    ],
    watch: true,
    devServer: {
      static: "./dist",
      hot: true,
      port: 8080,
      open: true,
    },
  };
};
